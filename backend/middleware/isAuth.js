import jwt from "jsonwebtoken";
const isAuth = (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Authentication token not found.",
      });
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired authentication token.",
      });
    }  
    req.userId = verifyToken.userId;
    // req.adminEmail = verifyToken.email || null;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
    });
  }
};

export default isAuth;
