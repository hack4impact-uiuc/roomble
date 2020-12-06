const express = require('express');
const router = express.Router();
const { Like } = require('../models');
const { Profile } = require('../models')

router.get('/', async (req, res) => {
    if (req.isAuthenticated()) {
        const userId = req.user._id;
        const ids = await Like.findOne({userId});
        const profiles = await Profile.find({"_id": { $in: ids.likedUsers} });
        res.json(profiles);
    } else {
        res.sendStatus(401);
    }
})

router.post('/', async (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.user._id;
      const { likedUser } = req.body;
      const userLikes = await Like.findOne({userId});
      
      if(userLikes.likedUsers.includes(likedUser)) {
        await Like.findOneAndUpdate({userId}, {$pull: {likedUsers: likedUser}})
      } else
      {
        await Like.findOneAndUpdate({userId}, {$push: {likedUsers: likedUser}})
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  })

module.exports = router