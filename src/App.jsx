import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes/>      
      </BrowserRouter>
    </div>
  );
}
