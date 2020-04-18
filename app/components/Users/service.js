const usersDAL = require('./DAL');

const getUsersByQuery = (query) => usersDAL.findUsers(query);

const getUserByQuery = (query) => usersDAL.findUser(query);

const createNewUser = (body) => usersDAL.saveUser(body);

module.exports = {
  getUsersByQuery,
  getUserByQuery,
  createNewUser,
};
