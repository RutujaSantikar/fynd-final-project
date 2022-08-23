const express = require("express");
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.fetchAllProgram);
router.get("/:id", API.fetchProgramByID);
router.post("/", API.createProgram);

module.exports = router;
