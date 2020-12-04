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


app.get('/profilepage/:userid', async (req, res) => {
  const {userid} = req.params;
  const response = await Profile.findById(userid)
  res.json(response);
});

app.post('/updateProfile', async (req, res) => {
  console.log('you made it!');
  const filter = { _id: '5fadf6bba3e3324e794a1141' };
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
  //console.log(req.body);

  //const newObj = new Profile(req.body);
  //await newObj.save()
  //res.json(newObj);
  
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});