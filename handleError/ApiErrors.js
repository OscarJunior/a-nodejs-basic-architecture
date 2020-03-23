const defaultErrorHandler = require('./handler');

function AppError(name, httpCode, description, isOperational) {
  Error.call(this);
  Error.captureStackTrace(this);

  this.name = name;
  this.httpCode = httpCode || 500;
  this.description = description;
  this.isOperational = isOperational;

  defaultErrorHandler.handler.handleError(this);
}

// extends
AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports = AppError;
