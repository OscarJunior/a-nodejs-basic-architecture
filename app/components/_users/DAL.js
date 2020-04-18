const User = require('./Schema');

const findUsers = (query) => User.find(query);

const findUser = (query) => User.findOne(query);

const saveUser = (body) => {
  const user = new User(body);

  return user.save();
};

module.exports = {
  findUsers,
  findUser,
  saveUser,
};
