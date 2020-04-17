const { AppError, INVALID_ARGUMENT } = require('../../../errors');
const { compareMatch } = require('../../../cryptions');
const { usersService, usersActions } = require('../../users');
const { signToken } = require('../../../tokens');

async function login(data) {
  if (!usersActions.validations.validateBodyUser(data)) {
    throw new AppError(INVALID_ARGUMENT, 'Check args and try again', 400);
  }

  const user = await usersService.getUserByQuery({
    username: data.username,
  });

  if (!user) {
    throw new AppError(INVALID_ARGUMENT, 'Invalid username', 400);
  }

  const match = await compareMatch(data.password, user.password);

  if (match) {
    const token = signToken({
      userId: user._id,
    });

    return {
      access_token: token,
      user,
    };
  }

  throw new AppError(INVALID_ARGUMENT, 'Invalid password', 400);
}

module.exports = login;
