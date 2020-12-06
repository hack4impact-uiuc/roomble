const mongoose = require ("mongoose");

const express = require('express');
const router = express.Router();

const { Profile, User } = require('../models');
const Like = require("../models/like.js");


router.get("/", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.post("/like/:userId", async (req, res) => {
  const { userId } = req.params;

  //get user that is liked (req.body[likedUser])
  const { likedUser } = req.body;

  //find the like object for the client
  const userLikes = Like.findOne({userId});

  //if the client's array includes the liked user
  if (userLikes.likedUsers.includes(likedUser)) {
    await Like.findOneAndUpdate({ userId }, { $pull: {likedUsers: likedUser} })
  } else {
    await Like.findOneAndUpdate({ userId }, { $push: {likedUsers: likedUser} })
  }
}

//filter requests
/*
router.get("/housingType", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.get("/numRoommates", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.get("/major", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.get("/age", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.get("/year", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});

router.get("/quizN", async (req, res) => {
  const response = await Profile.find({});
  res.json(response);
});
*/

)

module.exports = router;