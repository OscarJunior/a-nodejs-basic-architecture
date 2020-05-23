const cryptionsUtils = require('../../../utils/cryptions');

async function login(password, user) {
  const match = await cryptionsUtils.compareMatch(password, user.password);

  return match;
}

module.exports = login;
