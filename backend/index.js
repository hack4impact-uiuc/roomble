require('dotenv').config()

const express = require('express');
const router = express.Router();
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
const Likes = require("./models/like.js");
const User = require("./models/User.js");
const Profilerouter = require("./routes/profiles.js");

app.use("/profile" , Profilerouter);

app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});