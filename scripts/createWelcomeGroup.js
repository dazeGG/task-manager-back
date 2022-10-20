// Schemas
const Groups = require("../schemas/Group");
const Tasks = require("../schemas/Task");

// Template
const welcomeTask = require("../utils/welcomeTask");

module.exports = async () => {
  const createdTask = await Tasks.create(welcomeTask);
  const createdGroup = await Groups.create({
    title: "Welcome Group",
    tasks: [createdTask._id],
  });
  return createdGroup._id;
};
