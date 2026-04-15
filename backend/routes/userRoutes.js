
import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser, getAdmin } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";
const userRoutes = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);
userRoutes.get("/getadmin", isAuth, getAdmin);
userRoutes.post("/removeuser/:id", adminAuth, removeUser);

export default userRoutes;