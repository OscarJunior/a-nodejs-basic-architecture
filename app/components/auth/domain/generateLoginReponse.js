const { signToken } = require('../../../tokens');

function generateLoginResponse(user) {
  const token = signToken({
    userId: user.id,
  });

  return {
    access_token: token,
    user,
  };
}

module.exports = generateLoginResponse;
