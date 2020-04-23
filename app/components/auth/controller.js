const authActions = require('./actions');
const usersDAL = require('../users/DAL');

function postSignUp(req) {
  return authActions.signup(usersDAL, req.body);
}

function postLogin(req) {
  return authActions.login(usersDAL, req.body);
}

module.exports = {
  postSignUp,
  postLogin,
};
