const express = require('express');
const usersService = require('./usersService');

const router = express.Router();

router.get('', async (req, res) => {
  try {
    const { values = {}, properties = [] } = req.query;
    const users = await usersService.getByQuery(values, properties);

    res.status(200).json(users);
  } catch (e) {
    res.status(e.httpCode).json(e);
  }
});

module.exports = router;
