const bcrypt = require('bcryptjs');

const { SALT_ROUNDS } = require('./configuration');

function generateHash(plain) {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

function compareMatch(plain, hash) {
  return bcrypt.compare(plain, hash);
}

module.exports = {
  generateHash,
  compareMatch,
};
