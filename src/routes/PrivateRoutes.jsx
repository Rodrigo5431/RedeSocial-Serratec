// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  // Recupera o token do localStorage
  const token = localStorage.getItem("token");
  
  // Se o token existir, retorna o elemento da rota; caso contrário, redireciona para a página de login
  return (
    <>
      {token ? element : <Navigate to="/" />}
    </>
  );
};

export default PrivateRoute;
