const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // * required
  checked: { type: Boolean, default: false },
  subtasks: [
    {
      title: { type: String, required: true }, // * required
      checked: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("task", taskSchema);
