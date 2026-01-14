import User from "../model/User.js";

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user?.id; // injected by auth middleware

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User
      .findById(userId)
      .select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);

  } catch (error) {
    console.error("Error fetching current user:", error);
    return res.status(500).json({
      message: "getCurrentUser error",
      error: error.message,
    });
  }
};
