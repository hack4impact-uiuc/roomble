/** Import packages */
require('dotenv').config()
const {Profile} = require("./models")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;

/** Middleware */
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(cookieParser());

/** Authentication */
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

/** Setup MongoDB */
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

/** Define routes */
const {authRoute} = require('./routes');
const {profileRoute} = require("./routes");
const {registerRoute} = require('./routes')
app.use("/auth", authRoute);
app.use("/profile" , profileRoute);
app.use("/register", registerRoute)



app.get('/profilepage/', async (req, res) => {
  if (req.isAuthenticated()) {
    const userId = req.user._id;
    const response = await Profile.find({userId: userId});
    res.json(response[0]);
  } else {
    res.sendStatus(401);
  }
});
/** Sample endpoints */
app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.post('/updateProfile', async (req, res) => {
  if (req.isAuthenticated()) {
    const filter = { userId: req.user._id };
    const update = { 
      name : req.body.name, 
      school : req.body.school, 
      year : req.body.year, 
      gender : req.body.gender, 
      major : req.body.major, 
      age : req.body.age,
      phoneNumber : req.body.phoneNumber,
      fbUsername :  req.body.fbUsername,
      igUsername : req.body.igUsername,
      scUsername : req.body.scUsername,
      email : req.body.email,
      housingType : req.body.housingType,
      numRoomates : req.body.numRoomates,
      shortDesc : req.body.shortDesc,
      longDesc : req.body.longDesc
    };
    await Profile.countDocuments(filter); // 0

    let doc = await Profile.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true // Make this update into an upsert
    }); 
   
  } else {
    res.sendStatus(401);
  }
  
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

