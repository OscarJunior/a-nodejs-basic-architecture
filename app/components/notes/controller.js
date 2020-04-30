const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const { NOTES_END_POINT } = require('../../config/environment');

const PROTO_PATH = path.resolve('app/components/notes/proto/note.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const notes_proto = grpc.loadPackageDefinition(packageDefinition);
const client = new notes_proto.NoteService(
  `${NOTES_END_POINT}`,
  grpc.credentials.createInsecure()
);

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

    client.list(body, handler);
  });
}

module.exports = {
  getNotes,
};
