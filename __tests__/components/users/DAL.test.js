const chai = require('chai');
const sinon = require('sinon');

const usersDAL = require('../../../app/components/users/DAL');
const db = require('../../../app/config/database');

const userCollection = require('../../fixtures/userCollection');

const { expect } = chai;

describe('usersDAL', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    sandbox
      .stub(db, 'getCollection')
      .withArgs('users')
      .callsFake(() => userCollection);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('findUsers', (done) => {
    usersDAL.findUsers().then((users) => {
      const response = [{ bar: 'bar' }, { foo: 'foo' }];

      expect(users).to.deep.equal(response);
      done();
    });
  });

  it('findUser', (done) => {
    usersDAL.findUser().then((specificUser) => {
      expect(specificUser).to.deep.equal({ bar: 'bar' });

      done();
    });
  });

  it('user was not found', (done) => {
    const query = { isEmpty: true };

    usersDAL.findUser(query).then((specificUser) => {
      expect(specificUser).to.be.a('null');

      done();
    });
  });

  it('saveUser', (done) => {
    usersDAL.saveUser().then((newUser) => {
      expect(newUser).to.deep.equal({ foo: 'foo' });

      done();
    });
  });
});
