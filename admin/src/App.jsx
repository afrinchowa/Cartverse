import React from 'react'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'

function App() {
  return (
    <>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/lists' element={<Lists/>}></Route>
    <Route path='/orders' element={<Orders/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
</Routes>
    </>
  )
}

export default App