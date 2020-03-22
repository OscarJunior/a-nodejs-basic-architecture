const http = require('http');
const app = require('./config/app');
const DAL = require('./config/DAL');
const { PORT, NODE_ENV } = require('./config/environment');

const port = PORT || '3000';
const server = http.createServer(app);

DAL.loadDB();
server.listen(port);

console.info(`Your server is listening on port ${port} (http://localhost:${port})`);
console.info(`Running in ${NODE_ENV} mode`);
