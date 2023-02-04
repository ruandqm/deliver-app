import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { Navbar } from '../../components/Navbar/index'
import Restaurants from '../../components/Restaurants'
import { HomeContext } from '../../contexts'

export const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <HomeContext.Provider value={{ modalIsOpen, setIsOpen }}>
            <div className='homeContainer'>
                <Navbar isHome={true} />
                <Restaurants />
                <Modal />
            </div>
        </HomeContext.Provider>

    )
}