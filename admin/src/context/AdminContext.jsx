import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

// ✅ CREATE & EXPORT CONTEXT
export const adminDataContext = createContext(null);

function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);

  const { serverUrl } = useContext(authDataContext);

  const getadmin = async () => {
    try {
      const result = await axios.get(
        "${serverUrl}/api/user/getadmin",
        { withCredentials: true }
      );
      setAdminData(result.data);
    } catch (error) {
      console.error("Get admin error:", error);
      setAdminData(null);
    }
  };

  useEffect(() => {
    getadmin();
  }, []);

  const value = {
    adminData,
    setAdminData,
    serverUrl,
    getadmin,
  };

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}

export default AdminContext;