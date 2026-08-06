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

    // Verify token using secret key
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if(!verifyToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired authentication token.",
      });
    }
    // Attach user data to request object
    req.user = {
      id: verifyToken.userId,
    };

    // Attach admin email if available
    req.adminEmail = verifyToken.email || null;

    // Proceed to the next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
    });
  }
};

export default isAuth;