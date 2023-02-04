import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { Navbar } from '../../components/Navbar/index'
import Restaurants from '../../components/Restaurants'
import { HomeContext } from '../../contexts'

export const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('')

    const OpenModal = () => {
        setIsOpen(true)
    }
    const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <HomeContext.Provider value={{ modalIsOpen, setIsOpen, search, setSearch }}>
            <div className='homeContainer'>
                <Navbar isHome={true} modalOpen={OpenModal} search={getSearch} />
                <Restaurants />
                <Modal />
            </div>
        </HomeContext.Provider>

    )
}