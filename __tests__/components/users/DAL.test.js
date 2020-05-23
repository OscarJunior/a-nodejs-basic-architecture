// testing
const chai = require('chai');
const sinon = require('sinon');

// database
const mongodb = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

// to test
const dbAPI = require('../../../app/config/database');
const DAL = require('../../../app/components/users/DAL');

const { expect } = chai;
const { MongoClient } = mongodb;

describe('DAL; users', () => {
  let sandbox;
  let con;
  let dbMockAPI;
  let mongoServer;

  before(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();

    con = await MongoClient.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    dbMockAPI = con.db(await mongoServer.getDbName());
  });

  after(async () => {
    if (con) {
      con.close();
    }

    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(dbAPI, 'getCollection').callsFake((name) => dbMockAPI.collection(name));
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('it inserts a new user', (done) => {
    const body = {
      foo: 'bar',
    };

    DAL.saveUser(body).then((created) => {
      expect(created).to.include(body);
      expect(created).to.include.keys('_id');

      done();
    });
  });

  it('it finds one user', (done) => {
    const query = {
      foo: 'bar',
    };

    DAL.findUser(query).then((found) => {
      expect(found).to.include(query);
      expect(found).to.include.keys('_id');

      done();
    });
  });

  it('it finds users', (done) => {
    const query = {
      bar: 'foo',
    };

    DAL.findUsers(query).then((found) => {
      expect(found).to.be.an('array');

      done();
    });
  });
});
