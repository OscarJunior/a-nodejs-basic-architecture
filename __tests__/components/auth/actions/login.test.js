const chai = require('chai');
const sinon = require('sinon');

const cryptionsUtils = require('../../../../app/utils/cryptions');
const usersActions = require('../../../../app/components/users/actions');
const authDomain = require('../../../../app/components/auth/domain');

const loginAction = require('../../../../app/components/auth/actions/login');

const { expect } = chai;

function getEncryptedPassword() {
  return Promise.resolve({
    password: 'encrypted',
  });
}

describe('login', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('default success', (done) => {
    const usersDAL = {};
    const data = {
      username: 'username',
      password: 'password',
    };

    sandbox.stub(usersActions, 'getSpecificUser').callsFake(getEncryptedPassword);
    sandbox.stub(cryptionsUtils, 'compareMatch').callsFake(() => true);
    sandbox.stub(authDomain, 'generateLoginResponse').callsFake(() => 'bar');

    loginAction(usersDAL, data).then((response) => {
      expect(response).to.equal('bar');
      done();
    });
  });

  it('invalid username', (done) => {
    const usersDAL = {};
    const data = {
      username: 'username',
      password: 'password',
    };

    sandbox.stub(usersActions, 'getSpecificUser').callsFake(() => Promise.resolve(false));

    loginAction(usersDAL, data).catch(() => {
      expect(true);
      done();
    });
  });

  it('invalid password', (done) => {
    const usersDAL = {};
    const data = {
      username: 'username',
      password: 'password',
    };

    sandbox.stub(cryptionsUtils, 'compareMatch').callsFake(() => false);
    sandbox.stub(usersActions, 'getSpecificUser').callsFake(getEncryptedPassword);

    loginAction(usersDAL, data).catch(() => {
      expect(true);
      done();
    });
  });
});
