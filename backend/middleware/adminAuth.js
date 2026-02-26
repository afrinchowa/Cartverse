import React from 'react'
import jwt from 'jsonwebtoken'
const adminAuth = async (req, res, next) => {
  
   try{
const {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
   const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
   if(verifyToken.role !== 'admin'){
    return res.status(403).json({ message: 'Forbidden' });
   }    
   req.adminEmail = process.env.ADMIN_EMAIL;
   req.user = verifyToken;
   next();
   }
   
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default adminAuth;
