import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Suporte from '../pages/Suporte'
import Error from '../pages/Error'
import Configuracao from '../pages/Configuracao'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Posts' element={<Posts/>}></Route>
      <Route path='/Suporte' element={<Suporte/>}></Route>
      <Route path='*' element={<Error/>}></Route>
      <Route path='/Configuracao' element={<Configuracao/>}></Route>
    </Routes>
  )
}
