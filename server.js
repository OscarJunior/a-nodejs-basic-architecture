const http = require('http');
const app = require('./config/app');
const database = require('./config/database');
const { PORT } = require('./config/environment');
const logger = require('./config/logger');

const defaultErrorHandler = require('./errors/handler');

const port = PORT || '3000';
const server = http.createServer(app);

database.loadDB();
server.listen(port);

logger.log({
  level: 'info',
  message: `Your server is listening on port ${port} (http://localhost:${port})`,
});

process.on('uncaughtException', (error) => {
  defaultErrorHandler.handler.handleError(error);
});
