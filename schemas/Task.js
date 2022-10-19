const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  group: { type: mongoose.Types.ObjectId, required: true }, // * required
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
