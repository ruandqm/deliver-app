import React from 'react'
import { Navbar } from '../../components/Navbar/index'

export const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar isHome={true} />
        </div>
    )
}
