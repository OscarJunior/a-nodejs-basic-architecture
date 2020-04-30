const noteClient = require('../../config/noteClient');

function getNotes(req) {
  return new Promise((resolve, reject) => {
    const body = {
      query: {
        conditions: {
          title: req.query.title,
        },
        pageNumber: 0,
        resultPerPage: 10,
        sorter: '-createdAt',
      },
    };

    function handler(err, response) {
      if (err) {
        return reject(err);
      }

      return resolve(response);
    }

    noteClient.list(body, handler);
  });
}

function createNote(req) {
  return new Promise((resolve, reject) => {
    const { body } = req;

    function handler(err, response) {
      if (err) {
        return reject(err);
      }

      return resolve(response);
    }

    noteClient.insert(body, handler);
  });
}

module.exports = {
  getNotes,
  createNote,
};
