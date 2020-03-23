const usersDAL = require('./usersDAL');
const ApiError = require('../../handleError/ApiErrors');
const { RequiredInout } = require('../../handleError/commonErrors');

const getByQuery = (query, populates) => {
  const result = usersDAL.findUsers(query);

  if (!populates) {
    throw new ApiError(RequiredInout, 500, 'populates property is required', true);
  }

  if (!populates.length) {
    return result;
  }

  return populates.reduce((acc, populate) => acc.populate(populate), result);
};

module.exports = {
  getByQuery,
};
