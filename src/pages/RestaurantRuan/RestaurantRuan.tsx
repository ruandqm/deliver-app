import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import './style.scss'
import { ICartProduct, IProduct, IProductRequest, IRestaurant } from '../../interfaces/interfaces'

import { RestaurantInfos } from './components/RestaurantInfos/RestaurantInfos'
import { Products } from './components/Products/Products'
import { RestaurantRuanContext } from '../../contexts/contexts'
import { Cart } from './components/Cart/Cart'

export const RestaurantRuan = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>()
    const [actRestaurant, setActRestaurant] = useState<IRestaurant>()

    const [products, setProducts] = useState<IProduct[]>([])
    const [productsToRender, setProductsToRender] = useState<IProduct[]>([])

    const [restaurantId, setRestaurantId] = useState<number>()
    const [offCanvas, setOffCanvas] = useState(false)

    const [request, setRequest] = useState<IProductRequest[]>([])
    const [productCountAltered, setProductCountAltered] = useState(false) //control's var to force render the changes in the count
    const [totalRequestValue, setTotalRequestValue] = useState(0)

    const params = useParams()

    const GetProducts = () => {
        const actProducts = products.filter((product) => { return (product.idRestaurante == restaurantId) })
        setProductsToRender(actProducts)
    }
    const OpenCart = () => {
        setOffCanvas(true)
    }

    useEffect(() => {
        if (params.id != undefined) {
            const idRestaurant = parseInt(params.id.slice(1, params.id.length))
            setRestaurantId(idRestaurant)
        }
        api.restaurants().then(res => setRestaurants(res))
        api.products().then(res => setProducts(res))
    }, [])

    useEffect(() => {
        if (restaurants != undefined) {
            const restaurant = restaurants.filter((restaurant) => {
                return restaurant.id == restaurantId
            })
            setActRestaurant(restaurant[0])
        }
    }, [restaurants])

    useEffect(() => {
        GetProducts()
    }, [products])

    useEffect(() => {
        if (actRestaurant != undefined) {
            const localCount = window.localStorage.getItem(String(actRestaurant.id))
            localCount != null ? setRequest(JSON.parse(localCount)) : null
        }
    }, [actRestaurant])

    return (
        <div className='restaurantRuanContainer'>
            <RestaurantRuanContext.Provider value={{
                actRestaurant,
                productsToRender,
                offCanvas,
                setOffCanvas,
                request,
                setRequest,
                productCountAltered,
                setProductCountAltered,
                totalRequestValue,
                setTotalRequestValue
            }}>
                <Navbar cartOffCanvas={OpenCart} />
                <div className="container">
                    <RestaurantInfos />
                    <Products />
                    <Cart />
                </div>
            </RestaurantRuanContext.Provider>
        </div>
    )
}
