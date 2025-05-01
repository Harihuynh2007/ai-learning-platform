import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: { type: Number, default: 0 },  // Ví dụ: Lộ trình học tập của user
}, { timestamps: true });

// Hash mat khai truoc khi luu vao DB
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  next();
});
  

// so sanh mat khau khi dang nhap
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = model('User', userSchema);
export default User;
