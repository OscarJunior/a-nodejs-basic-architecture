const express = require('express');

const usersService = require('./usersService');
const defaultErrorHandler = require('../../errors/handler');
const { authMiddlewares } = require('../auth');

const router = express.Router();

router.get('', authMiddlewares.loggedIn, (req, res) => {
  const { userId } = req.payload;

  usersService.getUsersByQuery({ _id: userId }).then(
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
