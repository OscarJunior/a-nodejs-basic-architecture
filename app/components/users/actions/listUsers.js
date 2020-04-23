const { AppError, INVALID_ARGUMENT } = require('../../../utils/errors');

async function listUsers(usersDAL, query) {
  if (!query.id) {
    throw new AppError(INVALID_ARGUMENT, 'You must supply a userId', 400);
  }

  return usersDAL.findUsers(query);
}

module.exports = listUsers;
