const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Profile } = require('../models');

router.get('/', async (req, res) => {
  const { age, numRoommates, ...query } = { ...req.query };
  const response = await Profile.find({
    ...query,
    age: { $gte: parseInt(age[0]), $lte: parseInt(age[1]) },
    numRoommates: {
      $gte: parseInt(numRoommates[0]),
      $lte: parseInt(numRoommates[1]),
    },
  });
  res.json(response);
});

router.post('/', async (req, res) => {
  if (req.isAuthenticated()) {
    const newProfile = new Profile({
      ...req.body,
      userId: mongoose.Types.ObjectId(req.user._id),
    });
    await newProfile.save();
    res.json(newProfile);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
