const defaultErrorHandler = require('./handler');

/**
 * https://github.com/goldbergyoni/nodebestpractices#-35-name-your-functions
 */
function AppError(name, httpCode, description, isOperational) {
  Error.call(this);
  Error.captureStackTrace(this);

  this.name = name;
  this.httpCode = httpCode || 500;
  this.description = description;
  this.isOperational = isOperational;

  // default handler
  defaultErrorHandler.handler.handleError(this);
}

// extends
AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports = AppError;
