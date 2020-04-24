const chai = require('chai');
const sinon = require('sinon');

const listUsers = require('../../../../app/components/users/actions/listUsers');

const { expect } = chai;

describe('listUsers', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('get an array of users', (done) => {
    const usersDAL = {
      findUsers: () => ['u1', 'u2'],
    };
    const query = {
      id: true,
    };

    listUsers(usersDAL, query).then((response) => {
      expect(response).to.deep.equal(['u1', 'u2']);
      done();
    });
  });

  it('you must supply a userId', (done) => {
    const usersDAL = {};
    const query = {
      id: false,
    };

    listUsers(usersDAL, query).catch(() => {
      expect(true);
      done();
    });
  });
});
