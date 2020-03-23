const express = require('express');
const usersService = require('./usersService');

const router = express.Router();

router.get('', async (req, res) => {
  try {
    const users = await usersService.getByQuery(req.query);

    res.status(200).json(users);
  } catch (e) {
    res.status(e.httpCode).json(e);
  }
});

module.exports = router;
