import express from 'express';
const userRoutes = express.Router();
import isAuth from '../middleware/isAuth.js';
import { getCurrentUser } from '../controller/userController.js';

userRoutes.get('/current', isAuth, async (req, res) => {
    try {
        const result = await getCurrentUser({ userId: req.userId });
        if(result.status){
            return res.status(result.status).json({ message: result.message });
        }   
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: `Error fetching current user: ${error.message}` });
    }
});

module.exports = userRoutes;
