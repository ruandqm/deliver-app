import React, { useState } from 'react'
import RequestIcon from '../../assets/images/requests.svg'
import AddRestaurantIcon from '../../assets/images/addRestaurant.svg'
import './style.scss'

export const Navbar = (props: any) => {

    return (
        <header className='mainNavbar'>
            <a href="#"><h2>DeliverApp</h2></a>

            {props.isHome ? (<div className="searchBar">
                <span className="material-symbols-outlined">
                    search
                </span>
                <input type="text" placeholder='Busque por um restaurante' />
            </div>) : (<div className="return">
                <span className="material-symbols-outlined">
                    undo
                </span>
                <span>Restaurantes</span>
            </div>)}


            <nav>
                <a><img src={RequestIcon} alt="ícone para a página de pedidos" /></a>
                <a><img src={AddRestaurantIcon} alt="adicionar um restaurante" /></a>
            </nav>
        </header>
    )
}
