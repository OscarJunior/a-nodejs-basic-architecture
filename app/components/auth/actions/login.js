const { AppError, INVALID_ARGUMENT } = require('../../../utils/errors');
const cryptionsUtils = require('../../../utils/cryptions');

const authDomain = require('../domain');
const usersActions = require('../../users/actions');

async function login(usersDAL, data) {
  const user = await usersActions.getSpecificUser(usersDAL, {
    username: data.username,
  });

  if (!user) {
    throw new AppError(INVALID_ARGUMENT, 'Invalid username', 400);
  }

  const match = await cryptionsUtils.compareMatch(data.password, user.password);

  if (match) {
    return authDomain.generateLoginResponse(user);
  }

  throw new AppError(INVALID_ARGUMENT, 'Invalid password', 400);
}

module.exports = login;
