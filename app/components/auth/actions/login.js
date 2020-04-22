const { AppError, INVALID_ARGUMENT } = require('../../../errors');
const { compareMatch } = require('../../../cryptions');
const { signToken } = require('../../../tokens');

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
    const token = signToken({
      userId: user.id,
    });

    return {
      access_token: token,
      user,
    };
  }

  throw new AppError(INVALID_ARGUMENT, 'Invalid password', 400);
}

module.exports = login;
