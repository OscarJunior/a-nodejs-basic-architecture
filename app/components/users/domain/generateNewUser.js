const { v4 } = require('uuid');
const { AppError, INVALID_ARGUMENT } = require('../../../errors');

function validateBodyUser(data) {
  const { username, password } = data;

  if (!username || !password) {
    return false;
  }

  if (username && username.length < 1) {
    return false;
  }

  if (password && password.length < 1) {
    return false;
  }

  return true;
}

function generateNewUser(data) {
  if (!validateBodyUser(data)) {
    throw new AppError(INVALID_ARGUMENT, 'Check args and try again', 400);
  }

  return { ...data, createdOn: Date.now(), id: v4() };
}

module.exports = generateNewUser;
