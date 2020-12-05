require('dotenv').config()

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const session = require('express-session');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.js');

const app = express();
const port = 5000;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: '\'' + process.env.SESSION_SECRET + '\'',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const { User } = require('./models');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

const Profile = require("./models/profile.js");
const Profilerouter = require("./routes/profiles.js");

app.use("/auth", authRoutes);
app.use("/profile" , Profilerouter);

app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.put('/submitQuiz', async (req, res) => {
  const quizAnswers = req.body["answers"]; 
  console.log(quizAnswers)
  const filter = { _id:  req.user._id};
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
