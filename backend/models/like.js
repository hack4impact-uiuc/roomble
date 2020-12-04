var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LikesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  likedUsers: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
});

module.exports = mongoose.model("Like", LikesSchema);
