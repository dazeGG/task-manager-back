const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: { type: Number, required: true }, // * required
  title: { type: String, required: true }, // * required
  checked: { type: Boolean, default: false },
  subtasks: [
    {
      title: String,
      checked: Boolean,
    },
  ],
});

module.exports = mongoose.model("task", taskSchema);
