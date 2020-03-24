const express = require('express');

const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const packageJson = require('../package.json');

// routes
const { usersController } = require('../components/Users');

const app = express();

const bodyParserJson = bodyParser.json({
  limit: '5mb',
});
const bodyParserUrl = bodyParser.urlencoded({
  limit: '5mb',
  extended: true,
  parameterLimit: 50000,
});

app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use('/api/users', bodyParserUrl, bodyParserJson, usersController);
app.use('/', (req, res) => {
  res.json({
    name: packageJson.name,
    version: packageJson.version,
  });
});

module.exports = app;
