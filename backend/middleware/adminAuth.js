import React from 'react'
import jwt from 'jsonwebtoken'
const adminAuth = async (req, res, next) => {
  try {
    // Authentication logic here
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    let veryfyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!veryfyToken) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = veryfyToken;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
export default adminAuth;