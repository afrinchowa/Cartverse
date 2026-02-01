import axios from "axios";
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

// Context
export const userDataContext = createContext(null);

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Single source of truth (later move to .env)
  const serverUrl = "http://localhost:5000";

  const getCurrentUser = useCallback(async () => {
    try {
      const res = await axios.get(
        `${serverUrl}/api/user/current`,
        { withCredentials: true }
      );

      // ✅ Defensive assignment
      setUserData(res.data?.user || res.data || null);
    } catch (error) {
      console.error("Error fetching current user:", error);
      setUserData(null);
    }
  }, [serverUrl]);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const value = {
    userData,
    setUserData,
    getCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
