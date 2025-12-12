import React from 'react'
import Registration from './pages/Registration'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Registration/>}/>
    </Routes>
    </>
  )
}
export default App