const express = require("express");
const router = express.Router();
const profileViewerController = require("../controllers/profileViewerController");

// ROUTES

// Help Requests endpoint 
router.get(
  "/teachers/:id",
  profileViewerController.getTeachers
);

module.exports = router;


