import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Suporte from '../pages/Suporte'
import Error from '../pages/Error'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoutes'
import AtualizarPostagem from '../pages/AtualizarPostagem'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/posts" element={<PrivateRoute element={<Posts />} />} />
      <Route path="/atualizar/:id" element={<PrivateRoute element={<AtualizarPostagem />} />}/>
      <Route path="/suporte" element={<Suporte />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}
