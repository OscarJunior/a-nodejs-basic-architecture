const http = require('http');
const express = require('express');

const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = require('../environment');
const logger = require('../logger');
const { generateRoutes } = require('./routes');

function start() {
  const port = PORT || '3000';
  const app = express();
  const bodyParserJson = bodyParser.json({
    limit: '5mb',
  });
  const bodyParserUrl = bodyParser.urlencoded({
    limit: '5mb',
    extended: true,
    parameterLimit: 50000,
  });

  // routes
  app.use(compression());
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParserJson);
  app.use(bodyParserUrl);
  generateRoutes(app);

  const server = http.createServer(app);

  server.listen(port);

  logger.log({
    level: 'info',
    message: `Your server is listening on port ${port} (http://localhost:${port})`,
  });
}

module.exports = {
  start,
};
