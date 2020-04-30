// package
const packageJson = require('../../../../package.json');

// errors
const { NOT_FOUND } = require('../../../utils/errors');

// routes
const { usersController } = require('../../../components/users');
const { authController } = require('../../../components/auth');
const { notesController } = require('../../../components/notes');

// middlewares
const { authMiddlewares } = require('./middlewares');

// utils
const { makeFailResponse, makeSuccessResponse } = require('./utils');

function generateRoutes(app) {
  app.get('/api', (req, res) => {
    res.send({ name: packageJson.name, version: packageJson.version });
  });

  // user routes
  app.get('/api/user', authMiddlewares.loggedIn, (req, res) => {
    usersController.getUsers(req).then(
      (users) => makeSuccessResponse(res, { httpCode: 200, body: users }),
      (e) => makeFailResponse(res, e)
    );
  });

  // note routes
  app.get('/api/note', authMiddlewares.loggedIn, (req, res) => {
    notesController.getNotes(req).then(
      (notes) => makeSuccessResponse(res, { httpCode: 200, body: notes }),
      (e) => makeFailResponse(res, e)
    );
  });

  // auth routes
  app.post('/api/auth/signup', (req, res) => {
    authController.postSignUp(req).then(
      (user) => makeSuccessResponse(res, { httpCode: 201, body: user }),
      (e) => makeFailResponse(res, e)
    );
  });
  app.post('/api/auth/login', (req, res) => {
    authController.postLogin(req).then(
      (user) => makeSuccessResponse(res, { httpCode: 200, body: user }),
      (e) => makeFailResponse(res, e)
    );
  });

  // the catch all route
  app.all('*', (req, res) => {
    res.status(404).send({ msg: NOT_FOUND });
  });
}

module.exports = { generateRoutes };
