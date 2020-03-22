const User = require('./user');

const findUsers = (query) => User.find(query);

module.exports = {
  findUsers
};
