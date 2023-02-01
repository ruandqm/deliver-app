import React from 'react'
import { Navbar } from '../../components/Navbar/index'
import SearchRestaurant from '../../components/SearchRestaurant/SearchRestaurant'

export const Home = () => {

    return (
        <>

            <div className='homeContainer'>
                <Navbar isHome={true} />
            </div>

                <SearchRestaurant />

        </>

    )
}
