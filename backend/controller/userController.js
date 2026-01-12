import User from "../model/User";

export const getCurrentUser = async (params) => {
    try {
        // Logic to get current user details
        const user=await User.findById(params.userId);
        if(!user){
          return resizeBy.status(404).json({message:"User not found"});
        }
        return user;

    } catch (error) {
        console.error("Error fetching current user:", error);
        throw error;
    }
}