const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/course.controller');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.post('/', authMiddleware, roleMiddleware(['instructor', 'admin']), createCourse);
router.get('/', authMiddleware, getCourses);

module.exports = router;