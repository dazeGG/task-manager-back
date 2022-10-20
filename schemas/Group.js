const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  title: { type: String, required: true }, // * required
  tasks: [mongoose.Types.ObjectId],
});

module.exports = mongoose.model("group", groupSchema);
