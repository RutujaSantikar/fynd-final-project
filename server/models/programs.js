const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
  program: String,
  description: String,
  teacher: String,
});

module.exports = mongoose.model("Program", programSchema);
