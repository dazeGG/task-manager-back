const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // * required
  token: { type: String, required: true, unique: true }, // * required
  password: { type: String, required: true }, // * required
  groups: [mongoose.Types.ObjectId],
});

module.exports = mongoose.model("user", userSchema);
