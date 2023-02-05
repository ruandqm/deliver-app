import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import './style.scss'
import { IProduct, IRestaurant } from '../../interfaces/interfaces'

export const RestaurantRuan = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant>()
    const [products, setProducts] = useState<IProduct[]>([])
    const [productsToRender, setProductsToRender] = useState<IProduct[]>([])
    const params = useParams()

    const GetProducts = () => {
        if (params.id != undefined) {
            const idRestaurant = parseInt(params.id.slice(1, params.id.length))
            const actProducts = products.filter((product) => { return (product.idRestaurante == idRestaurant) })
            setProductsToRender(actProducts)
        }
    }

    useEffect(() => {
        api.restaurants().then(res => setRestaurants(res))
        api.products().then(res => setProducts(res))
    }, [])

    useEffect(() => {
        GetProducts()
    }, [products])

    return (
        <div className='restaurantRuanContainer'>
            <Navbar />
            <div className="container">
                <section className="actRestaurant">
                    {productsToRender.map((product) => {
                        return (
                            <div key={product.id}>{product.nome}</div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}
