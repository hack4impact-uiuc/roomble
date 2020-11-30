const express = require('express');
const router = express.Router();

const { Profile } = require('../models');

router.get("/", async (req, res) => {
    const response = await Profile.find({});
    res.json(response);
  });

  module.exports = router;