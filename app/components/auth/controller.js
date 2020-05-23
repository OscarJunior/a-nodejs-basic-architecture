const authActions = require('./actions');

const usersActions = require('../users/actions');
const usersDAL = require('../users/DAL');

const tokensUtils = require('../../utils/tokens');

const {
  AppError,
  INVALID_ARGUMENT,
  USERNAME_ALREADY_EXISTS,
} = require('../../utils/errors');

async function postSignUp(req) {
  const user = await usersActions.getSpecificUser(usersDAL, {
    username: req.body.username,
  });

  if (user) {
    throw new AppError(USERNAME_ALREADY_EXISTS, 'this username already exists', 400);
  }

  return usersActions.createNewUser(usersDAL, req.body);
}

async function postLogin(req) {
  const user = await usersActions.getSpecificUser(usersDAL, {
    username: req.body.username,
  });

  if (!user) {
    throw new AppError(INVALID_ARGUMENT, 'Invalid username', 400);
  }

  const match = await authActions.isMatch(req.body.password, user);

  if (!match) {
    throw new AppError(INVALID_ARGUMENT, 'Invalid password', 400);
  }

  const token = tokensUtils.signToken({
    userId: user.id,
  });

  return {
    auth_token: token,
    user,
  };
}

module.exports = {
  postSignUp,
  postLogin,
};
