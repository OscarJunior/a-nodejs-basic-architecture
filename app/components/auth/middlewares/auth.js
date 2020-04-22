const { verifyToken } = require('../../../tokens');
const { UNAUTHORIZED, defaultErrorHandler } = require('../../../errors');

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
      message: 'usnauthorized',
    });
  }
}

module.exports = {
  loggedIn,
};
