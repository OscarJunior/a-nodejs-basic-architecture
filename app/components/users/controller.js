const usersActions = require('./actions');
const usersDAL = require('./DAL');

function getUsers(req) {
  return usersActions.listUsers(usersDAL, { id: req.payload.userId });
}

module.exports = {
  getUsers,
};
