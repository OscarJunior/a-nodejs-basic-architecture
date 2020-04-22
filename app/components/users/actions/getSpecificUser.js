const { AppError, INVALID_ARGUMENT } = require('../../../errors');
const usersDAL = require('../DAL');

async function getSpecificUser(query) {
  if (!query.username) {
    throw new AppError(INVALID_ARGUMENT, 'You must supply a username', 400);
  }

  return usersDAL.findUser({
    username: query.username,
  });
}

module.exports = getSpecificUser;
