/** Import packages */
require('dotenv').config()
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

/** Sample endpoints */
app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
