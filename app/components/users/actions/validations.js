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

module.exports = { validateBodyUser };
