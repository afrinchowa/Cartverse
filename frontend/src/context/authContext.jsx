import React, { createContext } from 'react'
export const authDataContext = createContext()
function authContext({children}) {
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    </div>
  )
}

export default authContext