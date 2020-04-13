const bodyParser = require('body-parser');

const packageJson = require('../package.json');
const { usersController } = require('./components/Users');

function generateRoutes(app) {
  const bodyParserJson = bodyParser.json({
    limit: '5mb',
  });
  const bodyParserUrl = bodyParser.urlencoded({
    limit: '5mb',
    extended: true,
    parameterLimit: 50000,
  });

  // routes
  app.use('/api/user', bodyParserUrl, bodyParserJson, usersController);
  app.use('/', (req, res) => {
    res.json({
      name: packageJson.name,
      version: packageJson.version,
    });
  });
}

module.exports = generateRoutes;
