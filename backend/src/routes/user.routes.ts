import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller";

const router = Router();

router.post('/users', createUser); // Tao user moi
router.get('/users', getUsers); // Lay tat ca users

export default router;