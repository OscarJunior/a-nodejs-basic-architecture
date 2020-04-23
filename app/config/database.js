const mongodb = require('mongodb');
const { MONGO_URI, MONGO_DB_NAME } = require('./environment');

const { MongoClient } = mongodb;

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });

function getDB() {
  if (!client.isConnected()) {
    return client.connect();
  }

  const db = client.db(MONGO_DB_NAME);

  return db;
}

module.exports = getDB;
