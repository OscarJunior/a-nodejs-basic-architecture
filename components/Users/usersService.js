const usersDAL = require('./usersDAL');


const getByQuery = (query, populates) => {
  const result = usersDAL.findUsers(query);

  if (!populates.length) {
    return result;
  }

  return populates.reduce((acc, populate) => acc.populate(populate), result);
};

module.exports = {
  getByQuery
};
