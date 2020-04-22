const getDB = require('../../config/database');

const findUsers = async (query) => {
  const db = await getDB();
  const result = await db.collection('users').find(query);
  const users = await result.toArray();

  return users.map((user) => {
    delete user._id;

    return user;
  });
};

const findUser = async (query) => {
  const db = await getDB();
  const result = await db.collection('users').find(query);
  const found = await result.toArray();

  if (found.length === 0) {
    return null;
  }

  delete found[0]._id;

  return found[0];
};

const saveUser = async (body) => {
  const db = await getDB();
  const result = await db.collection('users').insertOne(body);

  delete result.ops[0]._id;

  return result.ops[0];
};

module.exports = {
  findUsers,
  findUser,
  saveUser,
};
