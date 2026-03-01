
import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser, getAdmin } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);
userRoutes.get("/getadmin", isAuth, getAdmin);

export default userRoutes;