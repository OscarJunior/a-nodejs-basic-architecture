const { AppError, INVALID_ARGUMENT } = require('../../../utils/errors');

async function getSpecificUser(usersDAL, query) {
  if (!query.username) {
    throw new AppError(INVALID_ARGUMENT, 'You must supply a username', 400);
  }

  return usersDAL.findUser({
    username: query.username,
  });
}

module.exports = getSpecificUser;
