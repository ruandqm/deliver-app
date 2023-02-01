import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/index'
import { Requests } from '../pages/Requests/index';
import { RestaurantMarcos } from '../pages/RestaurantMarcos/index';
import { RestaurantRuan } from '../pages/RestaurantRuan/index';

export const BrowseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/requests' element={<Requests />} />
                <Route path='/restaurantMarcos' element={<RestaurantMarcos />} />
                <Route path='/restaurantRuan' element={<RestaurantRuan />} />
            </Routes>
        </BrowserRouter>
    )
}