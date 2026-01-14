/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import React, {
  createContext,
  useState,
  useEffect
} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userDataContext = createContext(null);

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);

  // Configuration belongs here (or env file)
  const serverUrl = "http://localhost:5000";

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/user/current`,
        { withCredentials: true }
      );

      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

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
}

export default UserContext;
