import React ,{ useContext , useState} from "react";
import { authDataContext } from "./AuthContext";
import { adminDataContext } from "./AdminContextData";
function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);

  const { serverUrl } = useContext(authDataContext);
  const value = {
    adminData,
    setAdminData,
    serverUrl
  };
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
}

export { adminDataContext };
export default AdminContext;
