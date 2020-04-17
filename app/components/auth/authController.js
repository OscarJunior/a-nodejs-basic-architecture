const express = require('express');

const { signup, login } = require('./authActions');
const defaultErrorHandler = require('../../errors/handler');

const router = express.Router();

router.post('/signup', (req, res) => {
  signup(req.body).then(
    (user) => {
      res.status(200).json(user);
    },
    (err) => {
      defaultErrorHandler(err);
      res.status(err.httpCode || 500).send({
        name: err.name,
        message: err.message,
      });
    }
  );
});

router.post('/login', (req, res) => {
  login(req.body).then(
    (user) => {
      res.status(200).json(user);
    },
    (err) => {
      defaultErrorHandler(err);
      res.status(err.httpCode || 500).send({
        name: err.name,
        message: err.message,
      });
    }
  );
});

module.exports = router;
