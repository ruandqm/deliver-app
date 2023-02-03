import React from 'react'
import { Navbar } from '../../components/Navbar'
import { IRestaurant } from '../../interfaces'

export const RestaurantMarcos:React.FC<IRestaurant> = (props) => {
    return (
        <>
            <Navbar />

            <section>
                {props.nome}
            </section>

            <section>

            </section>
        </>
    )
}
