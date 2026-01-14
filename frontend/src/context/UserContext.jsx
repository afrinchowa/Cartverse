/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-undef */
import axios from "axios";
import React, { createContext,  useContext, useState } from "react";

export const userDataContext = createContext(null);

function UserContext({ children }) {
    let [userData, setUserData] = useState(null);
    let {serverUrl} = useContext(userDataContext);
const getCurrentUser = async () => {
    try {
        let result = await axios.post(serverUrl + "/api/user/current", {}, { withCredentials: true });
        if (result.data) {
            setUserData(result.data);
        }
    } catch (error) {
        setUserData(null);
        console.error("Error fetching current user:", error);
    }
};
useEffect(() => {
    getCurrentUser();
}, []);

  let value = {
    userData, setUserData, getCurrentUser
 };
  
  return (
    <userDataContext.Provider value={{ value }}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
