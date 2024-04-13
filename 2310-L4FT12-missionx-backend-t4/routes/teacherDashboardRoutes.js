const express = require("express");
const router = express.Router();
const teacherDashboardController = require('../controllers/teacherDashboardController');

// ROUTES
// Project Submissions endpoint
router.get('/:teacher_id/project-submissions', teacherDashboardController.projectSubmissions);
// router.post('/:teacher_id/project-submissions-completed', teacherDashboardController.projectSubmissionsCompleted);

// Help Requests endpoint 
router.get(
  "/help-requests",
  teacherDashboardController.getRequests
);

// Help Requests endpoint 
router.post(
    "/help-requests/done",
    teacherDashboardController.postMarkAsDone
);

module.exports = router;