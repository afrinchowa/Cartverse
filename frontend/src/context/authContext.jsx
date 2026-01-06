/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

export const authDataContext = createContext(null);

const AuthContext = ({ children }) => {
  const serverUrl = "http://localhost:5000";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    serverUrl,
    isAuthenticated,
    user,
    login,
    logout,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
