const express = require('express');

const { listUsers } = require('./actions');
const defaultErrorHandler = require('../../errors/handler');
const { authMiddlewares } = require('../auth/middlewares');

const router = express.Router();

router.get('', authMiddlewares.loggedIn, (req, res) => {
  listUsers({ id: req.payload.userId }).then(
    (users) => {
      res.status(200).json(users);
    },
    (e) => {
      defaultErrorHandler(e);

      res.status(e.httpCode || 500).send({
        name: e.name,
        message: e.message,
      });
    }
  );
});

module.exports = router;
