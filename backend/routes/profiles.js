const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const { Profile } = require('../models');

router.get("/", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.post('/', async (req, res) => {
  if (req.isAuthenticated()) {
    const newProfile = new Profile({...req.body, userId: mongoose.Types.ObjectId(req.user._id)});
    await newProfile.save()
    res.json(newProfile);
  } else {
    res.sendStatus(401);
  }
})

module.exports = router;