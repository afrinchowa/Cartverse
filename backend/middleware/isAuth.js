import token from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    try {
        // Authentication logic here
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
    let veryfyToken =jwt.verify(token, process.env.JWT_SECRET);
        req.user = veryfyToken;
        

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = isAuth;