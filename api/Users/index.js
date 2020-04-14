/**
 * https://github.com/goldbergyoni/nodebestpractices#-39-require-modules-by-folders-opposed-to-the-files-directly
 */
const usersController = require('./usersController');

module.exports = {
  usersController,
};
