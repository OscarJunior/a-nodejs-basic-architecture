const http = require('http');

// config
const app = require('./api/app');
const database = require('./config/database');
const { PORT } = require('./config/environment');
const logger = require('./config/logger');

// errors
const defaultErrorHandler = require('./errors/handler');

const port = PORT || '3000';
const server = http.createServer(app);

database.loadDB();
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
