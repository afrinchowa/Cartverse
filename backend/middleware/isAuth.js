const isAuth = async (req, res, next) => {
    try {
        // Authentication logic here
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = isAuth;