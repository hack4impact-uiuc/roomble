require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

const Profile = require("./models/profile.js");
const Likes = require("./models/Likes.js");
const User = require("./models/User.js");
const user = require('./models/User.js');


app.get('/likes/:userId', async (req, res) => {
  const {userId} = req.params;
  const ids = await Likes.find({"userId": userId});
  const profiles = await Profile.find({"_id": { $in: ids[0].likedUsers} });
  res.send(profiles);
})

app.post('/likes/:userId', async (req, res) => {
  const {userId} = req.params;
  const {likedUser} = req.body;
  const userLikes = await Likes.findOne({userId});
  console.log(userId);
  console.log(likedUser);
  console.log(userLikes)
  
  if(userLikes.likedUsers.includes(likedUser)) {
    //await Likes.findByIdAndUpdate(userId, {$pull: {likedUsers: likedUser}})
    await Likes.findOneAndUpdate({userId}, {$pull: {likedUsers: likedUser}})
  } else
  {
    await Likes.findOneAndUpdate({userId}, {$push: {likedUsers: likedUser}})
  }

})

app.get('')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});