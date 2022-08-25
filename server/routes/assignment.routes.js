const express = require("express");
const router = express.Router();
const assignmentAPI = require("../controllers/assignment.api");

router.get("/", assignmentAPI.fetchAllAssignment);
router.get("/:id", assignmentAPI.fetchAssignmentByID);
router.post("/", assignmentAPI.createAssignment);
router.delete("/:id", assignmentAPI.deleteAssignment);

module.exports = router;
