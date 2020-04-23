const { defaultErrorHandler } = require('../../../../utils/errors');

function makeFailResponse(res, error) {
  defaultErrorHandler(error);

  res.status(error.httpCode || 500).send({
    name: error.name,
    message: error.message,
  });
}

module.exports = makeFailResponse;
