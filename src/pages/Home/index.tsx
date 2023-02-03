import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/index'
import Restaurants from '../../components/Restaurants'

export const Home = () => {

    return (

        <div className='homeContainer'>
            <Navbar isHome={true} />
            <Restaurants />
        </div>

    )
}
