var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    enum: ['freshman', 'sophomore', 'junior', 'senior', 'grad'],
    default: 'freshman',
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  fbUsername: {
    type: String,
    required: false,
  },
  igUsername: {
    type: String,
    required: false,
  },
  scUsername: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  housingType: {
    type: String,
    enum: ['undergrad-dorms','grad-dorms', 'private', 'off-campus'],
    default: 'undergrad dorms',
    required: true,
  },
  numRoomates: {
    type: Number,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  longDesc: {
    type: String,
    required: false,
  },
  quizAnswers: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);