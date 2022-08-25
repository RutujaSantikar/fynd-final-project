const Program = require("../models/programs");

module.exports = class API {
  static async fetchAllProgram(req, res) {
    try {
      const programs = await Program.find();
      res.status(200).json(programs);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async fetchProgramByID(req, res) {
    const id = req.params.id;
    try {
      const program = await Program.findById(id);
      res.status(200).json(program);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async createProgram(req, res) {
    const program = req.body;
    try {
      await Program.create(program);
      res.status(201).json({ message: "program created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
