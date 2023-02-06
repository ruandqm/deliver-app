import React, { useContext } from 'react'
import { IRestaurant } from '../../../../interfaces/interfaces'
import StarIcon from '../../../../assets/images/star.svg'
import './style.scss'
import { RestaurantRuanContext } from '../../../../contexts/contexts'


export const RestaurantInfos = () => {
    const { actRestaurant } = useContext(RestaurantRuanContext)
    return (
        <section className="restaurantInfosContainer">
            <img src={actRestaurant?.url} alt="logo do restaurante" />
            <h1>{actRestaurant?.nome}</h1>
            <span className='rate'><img src={StarIcon} alt="estrela" /><h1>{actRestaurant?.avaliacao}</h1></span>
        </section>
    )
}
