import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Error from './pages/Error'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes/>      
        <Error />
      </BrowserRouter>
    </div>
  );
}
