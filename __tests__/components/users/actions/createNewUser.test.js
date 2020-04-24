const chai = require('chai');
const sinon = require('sinon');

const cryptionsUtils = require('../../../../app/utils/cryptions');
const usersDomain = require('../../../../app/components/users/domain');
const createNewUser = require('../../../../app/components/users/actions/createNewUser');

const { expect } = chai;

describe('createNewUser', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('create a new user with encrypted password', (done) => {
    const usersDAL = {
      saveUser: (body) => body,
    };
    const data = {};

    sandbox.stub(usersDomain, 'generateNewUser').callsFake(() => ({
      password: 'foo',
    }));
    sandbox
      .stub(cryptionsUtils, 'generateHash')
      .withArgs('foo')
      .callsFake(() => 'foo was encrypted');

    createNewUser(usersDAL, data).then((response) => {
      expect(response).to.deep.equal({
        password: 'foo was encrypted',
      });
      done();
    });
  });
});
