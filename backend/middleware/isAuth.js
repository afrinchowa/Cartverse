import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    // If you are using "Bearer TOKEN"
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: verifyToken.userId,
    };

    next();
  } catch (error) {
    console.error("isAuth error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;