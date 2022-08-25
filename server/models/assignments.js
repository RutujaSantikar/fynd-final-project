const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
  title: String,
  instructions: String,
  dueDate: String,
});

module.exports = mongoose.model("Assignment", assignmentSchema);
