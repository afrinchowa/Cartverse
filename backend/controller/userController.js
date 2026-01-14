import User from "../model/User";

export const getCurrentUser = async (req,res) => {
    try {
        // Logic to get current user details
        const user=await User.findById(params.userId).select("-password");
        if(!user){
          return {status: 404, message:"User not found"};
        }
        return user;

    } catch (error) {
        console.error("Error fetching current user:", error);
       return {status: 500, message:`getCurrentUser error ${error.message}`};
    }
}