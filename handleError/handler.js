const logger = require('../config/logger');

function logError(err) {
  logger.log({
    level: 'error',
    ...err,
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
