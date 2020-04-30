const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const { NOTES_END_POINT } = require('../environment');

const PROTO_PATH = path.resolve('app/config/noteClient/proto/note.proto');
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

module.exports = client;
