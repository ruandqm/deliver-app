import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/Home'
import { Requests } from '../pages/Requests/index';
import { Restaurant } from '../pages/Restaurant/Restaurant';
import { RestaurantMarcos } from '../pages/RestaurantMarcos/index';
import { RestaurantRuan } from '../pages/RestaurantRuan/index';

export const BrowseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/requests' element={<Requests />} />
                <Route path='/restaurant/:id' element={<Restaurant />} />
                <Route path='/restaurantMarcos' element={<RestaurantMarcos />} />
                <Route path='/restaurantRuan' element={<RestaurantRuan />} />
            </Routes>
        </BrowserRouter>
    )
}