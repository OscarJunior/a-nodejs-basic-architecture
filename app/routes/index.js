// package
const packageJson = require('../../package.json');

// routes
const { usersController } = require('../components/Users');

function generateRoutes(app) {
  app.get('/', (req, res) => {
    res.send({ name: packageJson.name, version: packageJson.version });
  });

  app.use('/api/user', usersController);

  // the catch all route
  app.all('*', (req, res) => {
    res.status(404).send({ msg: 'not found' });
  });
}

module.exports = generateRoutes;
