const Course = require('../models/course.model');

const createCourse = async (req, res) => {
    const { title, description, instructor } = req.body;
    try {
      const course = new Course({ title, description, instructor });
      await course.save();
      res.status(201).json({ message: 'Course created', course });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };

const getCourse = async (req, res) => {
    try{
        const courses = await Course.find().populate('instructor', 'username');
        res.status(200).json(courses);
    }catch(err){
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {createCourse, getCourse};