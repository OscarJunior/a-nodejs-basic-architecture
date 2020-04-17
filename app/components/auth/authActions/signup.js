const {
  AppError,
  INVALID_ARGUMENT,
  USERNAME_ALREADY_EXISTS,
} = require('../../../errors');
const { generateHash } = require('../../../cryptions');
const { usersService, usersActions } = require('../../users');

async function signup(data) {
  if (!usersActions.validations.validateBodyUser(data)) {
    throw new AppError(INVALID_ARGUMENT, 'Check args and try again', 400);
  }

  const user = await usersService.getUserByQuery({
    username: data.username,
  });

  if (user) {
    throw new AppError(USERNAME_ALREADY_EXISTS, 'this username already exists', 400);
  }

  const encryptedPassword = await generateHash(data.password);

  return usersService.createNewUser({
    username: data.username,
    password: encryptedPassword,
  });
}

module.exports = signup;
