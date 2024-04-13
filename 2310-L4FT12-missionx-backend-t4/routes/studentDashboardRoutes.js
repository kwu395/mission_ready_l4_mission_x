const express = require("express");
const router = express.Router();
const studentDashboardController = require("../controllers/studentDashboardController");

// ROUTES

// Projects endpoint
router.get("/projects", studentDashboardController.getProjects);

// Learning Objectives endpoint
router.get(
  "/learning-objectives/:project_id",
  studentDashboardController.getLearningObjectives
);

// Instructions endpoint
router.get(
  "/instructions/:project_id",
  studentDashboardController.getInstructions
);

// Video tutorial endpoint
router.get("/video/:project_id", studentDashboardController.getVideo);

// Submit Project endpoint
router.post('/:student_id/submit-project/:project_id', studentDashboardController.submitProject)

module.exports = router;