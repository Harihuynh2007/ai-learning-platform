const Lesson = require('../models/lesson.model');

const createLesson = async (req, res) => {
    const { title, content, course, order } = req.body;
    try {
        const lesson = new Lesson({ title, content, course, order });
        await lesson.save();
        res.status(201).json({ message: 'Lesson created', lesson });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getLessonsByCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const lessons = await Lesson.find({ course: courseId }).sort({ order: 1 });
        res.status(200).json(lessons);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createLesson,
    getLessonsByCourse
};