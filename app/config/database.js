const mongodb = require('mongodb');
const { MONGO_URI, MONGO_DB_NAME } = require('./environment');

const { MongoClient } = mongodb;

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });

function getCollection(collectionName) {
  return client.db(MONGO_DB_NAME).collection(collectionName);
}

function loadDB() {
  return client.connect();
}

module.exports = { loadDB, getCollection };
