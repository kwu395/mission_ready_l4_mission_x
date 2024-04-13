const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authenticationController');

// ROUTES

router.post('/student_login', authenticationController.studentLogin);
router.post('/teacher_login', authenticationController.teacherLogin);
router.post('/signup', authenticationController.signup);

module.exports = router;