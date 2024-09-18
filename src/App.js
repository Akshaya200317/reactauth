import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Landing from './Component/Landing'

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Login/>}></Route>
      <Route path='/signup'  element={<Signup/>}></Route>
      <Route path='/landing'  element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App








