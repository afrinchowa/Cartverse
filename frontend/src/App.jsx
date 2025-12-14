import React from 'react'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Registration/>}/>
    </Routes>
    </>
  )
}
export default App