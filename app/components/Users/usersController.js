const express = require('express');
const usersService = require('./usersService');
const defaultErrorHandler = require('../../errors/handler');

const router = express.Router();

router.get('', async (req, res) => {
  try {
    const { values = {} } = req.query;
    const users = await usersService.getUsersByQuery(values);

    res.status(200).json(users);
  } catch (e) {
    defaultErrorHandler(e);

    res.status(e.httpCode || 500).send({
      name: e.name,
      message: e.message,
    });
  }
});

module.exports = router;
