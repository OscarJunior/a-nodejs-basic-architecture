const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_KEY } = require('../config/environment');

function signToken(payload) {
  return jwt.sign(payload, JWT_PRIVATE_KEY);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_PRIVATE_KEY);
}

module.exports = {
  signToken,
  verifyToken
};
