const chai = require('chai');
const sinon = require('sinon');

const signupAction = require('../../../../app/components/auth/actions/signup');
const usersActions = require('../../../../app/components/users/actions');

const { expect } = chai;

describe('signup', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('signup success', (done) => {
    const usersDAL = {};
    const data = {
      username: '',
    };

    sandbox.stub(usersActions, 'getSpecificUser').callsFake(() => Promise.resolve(false));
    sandbox.stub(usersActions, 'createNewUser').callsFake(() => 'was created');

    signupAction(usersDAL, data).then((response) => {
      expect(response).to.equal('was created');
      done();
    });
  });

  it('user already exists', (done) => {
    const usersDAL = {};
    const data = {
      username: '',
    };

    sandbox.stub(usersActions, 'getSpecificUser').callsFake(() => Promise.resolve(true));

    signupAction(usersDAL, data).catch(() => {
      expect(true);
      done();
    });
  });
});
