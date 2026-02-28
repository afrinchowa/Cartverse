import express from 'express';
import isAuth from '../middleware/isAuth.js';
import {getCurrentUser,getAdmin} from '../controllers/userController.js';


const router = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);
userRoutes.get("/getadmin", adminAuth, getAdmin);

export default userRoutes;
