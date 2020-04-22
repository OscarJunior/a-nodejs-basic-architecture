const { AppError, USERNAME_ALREADY_EXISTS } = require('../../../errors');
const usersActions = require('../../users/actions');

async function signup(data) {
  const user = await usersActions.getSpecificUser({
    username: data.username,
  });

  if (user) {
    throw new AppError(USERNAME_ALREADY_EXISTS, 'this username already exists', 400);
  }

  return usersActions.createNewUser(data);
}

module.exports = signup;
