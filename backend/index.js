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


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//const Pusheens = require("./models/Pusheens.js");


app.get('/', async (req, res) => {
  const response = await Profile.find({})
  res.send(response)
  res.json(response);
});



/*app.get('/', async (req, res) => {
  res.send('Hello World')
}); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});