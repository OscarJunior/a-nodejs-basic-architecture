// config
const server = require('./config/server');
const database = require('./config/database');

// errors
const defaultErrorHandler = require('./errors/handler');

function main() {
  database().then();
  server.start();
}

process.on('unhandledRejection', (reason) => {
  throw reason;
});

process.on('uncaughtException', (error) => {
  const isOperational = false;

  defaultErrorHandler(error, isOperational);
});

main();
