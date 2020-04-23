const { AppError, USERNAME_ALREADY_EXISTS } = require('../../../utils/errors');
const usersActions = require('../../users/actions');

async function signup(usersDAL, data) {
  const user = await usersActions.getSpecificUser(usersDAL, {
    username: data.username,
  });

  if (user) {
    throw new AppError(USERNAME_ALREADY_EXISTS, 'this username already exists', 400);
  }

  return usersActions.createNewUser(usersDAL, data);
}

module.exports = signup;
