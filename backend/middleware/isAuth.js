import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
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

req.userId = veryfyToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: `googleLogin error ${error.message}` });
  }
};

module.exports = isAuth;
