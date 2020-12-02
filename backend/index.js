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
// const Likes = require("./models/Likes.js");
// const User = require("./models/User.js");

app.get('/loginpage', async (req, res) => {
  res.send('Hello World')
});

app.post('/submitQuiz', async (req, res) => {
  const quizAnswers = req.body["quizAnswers"];
 
  const filter = {_id:  new mongoose.Types.ObjectId("asdfadfasdf");};
  const update = { quizAnswers : quizAnswers};
  let doc = await Profile.findOneAndUpdate(filter, update);

  //get user's id
  //find that user's profile
  //update that user's profile with those quiz answers
  //respond with success
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
