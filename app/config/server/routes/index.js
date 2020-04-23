// package
const packageJson = require('../../../../package.json');

// errors
const { NOT_FOUND } = require('../../../errors/commonErrors');

// routes
const { usersController } = require('../../../components/users');
const { authController } = require('../../../components/auth');

function generateRoutes(app) {
  app.get('/api', (req, res) => {
    res.send({ name: packageJson.name, version: packageJson.version });
  });

  app.use('/api/user', usersController);
  app.use('/api/auth', authController);

  // the catch all route
  app.all('*', (req, res) => {
    res.status(404).send({ msg: NOT_FOUND });
  });
}

module.exports = generateRoutes;
