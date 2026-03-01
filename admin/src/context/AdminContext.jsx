import React ,{ useContext , useState} from "react";
import { authDataContext } from "./AuthContext";
import { adminDataContext } from "./AdminContextData";
import axios from "axios";

function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);

  const { serverUrl } = useContext(authDataContext);
  const value = {
    adminData,
    setAdminData,
    serverUrl
  };
  const getadmin = async () => {
    try {
      const result =await axios.get(serverUrl + "/api/user/getadmin",{withCredentials:true}) 
      setAdminData(result.data)
    console.log(result.data)}
    catch (error) {      console.log(error)

    }
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
}
}
export default AdminContext;
