import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../pages/Posts'
import Home from '../pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/posts' element={<Posts/>} ></Route>
    </Routes>
  )
}
