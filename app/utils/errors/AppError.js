function AppError(name, message, httpCode) {
  Error.call(this);
  Error.captureStackTrace(this);

  this.name = name;
  this.httpCode = httpCode;
  this.message = message;
}

// extends
AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports = AppError;
