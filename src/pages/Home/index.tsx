import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/index'

export const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar isHome={true} />
        </div>
    )
}
