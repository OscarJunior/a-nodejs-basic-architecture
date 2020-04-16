const usersDAL = require('./usersDAL');

const ApiErrors = require('../../errors/ApiErrors');
const { InternalServerError } = require('../../errors/commonErrors');

const getByQuery = (query, populates) => {
  const result = usersDAL.findUsers(query);

  if (!populates) {
    throw new ApiErrors(InternalServerError, 'Populates property is required', 500);
  }

  if (!populates.length) {
    return result;
  }

  return populates.reduce((acc, populate) => acc.populate(populate), result);
};

module.exports = {
  getByQuery,
};
