function makeSuccessResponse(res, data) {
  const { httpCode, body } = data;

  res.status(httpCode).json(body);
}

module.exports = makeSuccessResponse;
