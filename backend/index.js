require('dotenv').config()

const express = require('express');
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

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: '\'' + process.env.SESSION_SECRET + '\'',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/User')
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

 const Profile = require("./models/profile.js");
// const Likes = require("./models/Likes.js");
// const User = require("./models/User.js");

app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.use('/auth/', authRoutes)

app.get('/getProfile', async (req, res) => {
    if (req.isAuthenticated()) {
        req.user.username
    } else {
        res.send('Not logged in!')
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
