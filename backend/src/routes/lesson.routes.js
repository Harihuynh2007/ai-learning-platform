const express = require('express');
const router = express.Router();
const { createLesson, getLessonsByCourse } = require('../controllers/less.controller');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

// Tạo bài học mới (chỉ instructor/admin mới được tạo)
router.post('/', authMiddleware, roleMiddleware(['instructor', 'admin']), createLesson);

// Lấy bài học theo khóa học
router.get('/course/:courseId', authMiddleware, getLessonsByCourse);

module.exports = router;
