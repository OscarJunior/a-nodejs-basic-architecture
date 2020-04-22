const { AppError, INVALID_ARGUMENT } = require('../../../errors');
const { compareMatch } = require('../../../cryptions');

const authDomain = require('../domain');
const usersActions = require('../../users/actions');

async function login(data) {
  const user = await usersActions.getSpecificUser({
    username: data.username,
  });

  if (!user) {
    throw new AppError(INVALID_ARGUMENT, 'Invalid username', 400);
  }

  const match = await compareMatch(data.password, user.password);

  if (match) {
    return authDomain.generateLoginResponse(user);
  }

  throw new AppError(INVALID_ARGUMENT, 'Invalid password', 400);
}

module.exports = login;
