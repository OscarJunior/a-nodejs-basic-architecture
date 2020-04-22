const { AppError, INVALID_ARGUMENT } = require('../../../errors');
const usersDAL = require('../DAL');

async function listUsers(query) {
  if (!query.id) {
    throw new AppError(INVALID_ARGUMENT, 'You must supply a userId', 400);
  }

  return usersDAL.findUsers(query);
}

module.exports = listUsers;
