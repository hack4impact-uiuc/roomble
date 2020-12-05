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

app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.put('/submitQuiz', async (req, res) => {
  const quizAnswers = req.body["answers"]; 
  console.log(quizAnswers)
  const filter = { _id:  new mongoose.Types.ObjectId("5fadf6bba3e3324e794a1141")};
  const update = { quizAnswers: quizAnswers };
  let doc = await Profile.findOneAndUpdate(filter, update);
  res.status(200); 

  // get users id 
  // find user profile from id
  // update specific profile with the quiz answers
  // send success 
  //{“quizAnswers”: [1,2,3]} 
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});