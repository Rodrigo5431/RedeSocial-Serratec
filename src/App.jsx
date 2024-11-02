import React from 'react'
import Error from './pages/Error'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    </div>
  );
}
