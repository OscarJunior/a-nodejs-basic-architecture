const express = require('express');

const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const generateRouttes = require('./routes');

const app = express();

app.use(compression());
app.use(cors());
app.use(cookieParser());

// app
generateRouttes(app);

module.exports = app;
