const http = require('http');
const express = require('express');

// app
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

// config
require('./config/database')().then();
const { PORT } = require('./config/environment');
const logger = require('./config/logger');

// errors
const defaultErrorHandler = require('./errors/handler');

// routes
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

require('./routes')(app);

const server = http.createServer(app);

server.listen(port);

logger.log({
  level: 'info',
  message: `Your server is listening on port ${port} (http://localhost:${port})`,
});

process.on('unhandledRejection', (reason) => {
  throw reason;
});

process.on('uncaughtException', (error) => {
  const isOperational = false;

  defaultErrorHandler(error, isOperational);
});
