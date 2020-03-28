const logger = require('../config/logger');

function logError(err) {
  logger.log({
    level: 'error',
    ...err,
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
}

function DefaultErrorHandler() {
  this.handleError = (err) => {
    logError(err);

    if (!err.isOperational) {
      process.exit(1);
    }
  };
}

module.exports = {
  handler: new DefaultErrorHandler(),
};
