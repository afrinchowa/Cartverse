import jwt from "jsonwebtoken";

/**
 * Authentication Middleware
 * -------------------------
 * This middleware verifies the JWT token stored in cookies.
 * If the token is valid, it attaches user information to the request object.
 * Otherwise, it blocks access with an unauthorized response.
 */

const isAuth = (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies?.token;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Authentication token not found.",
      });
    }

    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request object
    req.user = {
      id: decoded.userId,
    };

    // Attach admin email if available
    req.adminEmail = decoded.email || null;

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