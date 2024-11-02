import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <AppRoutes/>      
      </BrowserRouter>
    </div>
  )
}
