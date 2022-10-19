const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, required: true }, // * required
  title: { type: String, required: true }, // * required
  tasks: [mongoose.Types.ObjectId],
});

module.exports = mongoose.model("group", groupSchema);
