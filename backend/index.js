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

app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.get('/profiles', async (req, res) => {
  const response = await Profile.find();
  //const response = await Profile.findById("5fadf6bba3e3324e794a1141");
  res.send(response);
})

app.get('/likes/:userId', async (req, res) => {
  const {userId} = req.params;
  const ids = await Likes.find({"userId": userId});
  const profiles = await Profile.find({"_id": { $in: ids[0].likedUsers} });
  //console.log(ids)
  //console.log(profiles)
  /*for (var profileId of ids[0].likedUsers) {
    console.log(profileId)
    const profile = await Profile.findById(profileId);
    console.log(profile.name)
  }
  console.log("hello");*/

  res.send(profiles);
})

app.get('')




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});