const tokensUtils = require('../../../utils/tokens');

function generateLoginResponse(user) {
  const token = tokensUtils.signToken({
    userId: user.id,
  });

  return {
    access_token: token,
    user,
  };
}

module.exports = generateLoginResponse;
