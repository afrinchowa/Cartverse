import React, { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const authDataContext = createContext(null);

function AuthContext({ children }) {
  const serverUrl = "http://localhost:5000";

  const value = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;