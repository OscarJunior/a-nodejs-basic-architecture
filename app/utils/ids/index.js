const { v4 } = require('uuid');

function generateNewId() {
  return v4();
}

module.exports = {
  generateNewId,
};
