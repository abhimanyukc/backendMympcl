const express = require('express');
const  teamMemberController = require("../controllers/teamMemberController");
const router = express.Router();

router.post("/", teamMemberController.createTeamMember);
router.get("/", teamMemberController.getAllTeamMembers);
module.exports = router;