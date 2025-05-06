const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const lessonRoutes = require('./routes/lesson.routes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes); 
app.use('/api/lessons', lessonRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));