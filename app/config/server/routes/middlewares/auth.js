const { verifyToken } = require('../../../../utils/tokens');
const { UNAUTHORIZED, defaultErrorHandler } = require('../../../../utils/errors');

function getAuthToken(req) {
  return req.headers.auth_token;
}

function loggedIn(req, res, next) {
  try {
    const authToken = getAuthToken(req);
    const payload = verifyToken(authToken);

    req.payload = payload;

    next();
  } catch (e) {
    defaultErrorHandler(e);

    res.status(401).send({
      name: UNAUTHORIZED,
      message: 'you do not have permissions to access',
    });
  }
}

module.exports = {
  loggedIn,
};
