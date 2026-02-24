import React from 'react'
import { createContext } from 'react'
export const authDataContext =createContext()
function AuthContext() {
    const serverUrl = "http://localhost:8000/api/auth  " 
    const value ={
serverUrl
    }
  return (
    <div>
        <authDataContext.Provider value={{value}}>
            {children}
        </authDataContext.Provider>
    </div>
  )
}

export default AuthContext