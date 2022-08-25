const Assignment = require("../models/assignments");

module.exports = class assignmentAPI {
  static async fetchAllAssignment(req, res) {
    try {
      const assignments = await Assignment.find();
      res.status(200).json(assignments);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async fetchAssignmentByID(req, res) {
    const id = req.params.id;
    try {
      const assignment = await Assignment.findById(id);
      res.status(200).json(assignment);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async createAssignment(req, res) {
    const assignment = req.body;
    try {
      await Assignment.create(assignment);
      res.status(201).json({ message: "assignment created successfully !" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async deleteAssignment(req, res) {
    const id = req.params.id;
    try {
      await Assignment.findByIdAndDelete(id);
      res.status(200).json({ message: "assignment deleted successfully !" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
