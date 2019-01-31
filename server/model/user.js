var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  principle: String,
  publicKey: String,
  privateKey: String,
  email: String,
  passwordHash: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;