import React, { useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";

import axios from "axios";

function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);

  const { serverUrl } = useContext(authDataContext);
  const value = {
    adminData,
    setAdminData,
    serverUrl,
  };
  const getadmin = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/user/getadmin", {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log(result.data);
    } catch (error) {
      setAdminData(null);
      console.log(error);
    }
  };
  useEffect(() => {
    getadmin();
  }, []);
  const value = {
    adminData,
    setAdminData,
    serverUrl,
  };
    return (
      <div>
        <adminDataContext.Provider value={value}>
          {children}
        </adminDataContext.Provider>
      </div>
    );
  };
export const adminDataContext = React.createContext();
export default AdminContext;
