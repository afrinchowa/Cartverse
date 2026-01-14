import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'


export const App = () => {
  return (
    <>
     <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Registration/>}/>

    </Routes>
    </>
  )
}
export default App