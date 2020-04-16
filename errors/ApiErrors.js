function ApiError(name, message, httpCode) {
  Error.call(this);
  Error.captureStackTrace(this);

  this.name = name;
  this.httpCode = httpCode;
  this.message = message;
}

// extends
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

module.exports = ApiError;
