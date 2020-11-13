var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  profileId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
