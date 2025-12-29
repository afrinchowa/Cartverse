import React, { createContext } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const authDataContext = createContext()
function AuthContext({children}) {
  let serverUrl = "http://localhost:5000"
  let value = {
    isAuthenticated: false,
    user: null,
    login: (userData) => {
      value.isAuthenticated = true
      value.user = userData
    },
    logout: () => {
      value.isAuthenticated = false
      value.user = null
    }
  }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    </div>
  )
}

export default AuthContext