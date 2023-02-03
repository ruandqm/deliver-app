import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import { Home } from './pages/Home'
import { RestaurantMarcos } from './pages/RestaurantMarcos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurant" element={<RestaurantMarcos />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
