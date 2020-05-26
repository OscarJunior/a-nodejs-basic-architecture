const db = require('../../config/database');

const findUsers = async (query) => {
  const result = await db.getCollection('users').find(query);
  const users = await result.toArray();

  return users;
};

const findUser = async (query) => {
  const result = await db.getCollection('users').findOne(query);

  return result;
};

const saveUser = async (body) => {
  const result = await db.getCollection('users').insertOne(body);

  return result.ops[0];
};

module.exports = {
  findUsers,
  findUser,
  saveUser,
};
