import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import { ICartProduct, ICartProductMarcos, IProduct, IRestaurant } from '../../interfaces/interfaces'
import CardProducts from './Components/CardMarcos/CardProducts'
import "./style.scss"
import Card from './Components/CardMarcos/CardRestaurant'
import { RestaurantMarcosContext } from '../../contexts/contexts'
import { ModalMarcos } from './Components/Modal/ModalMarcos'

export const RestaurantMarcos = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>()
    const [actRestaurant, setActRestaurant] = useState<IRestaurant>()

    const [products, setProducts] = useState<IProduct[]>([])
    const [productsToRender, setProductsToRender] = useState<IProduct[]>([])

    const [restaurantId, setRestaurantId] = useState<number>()
    const [openModalMarcos, setModalMarcos] = useState(false)

    const [request, setRequest] = useState<ICartProductMarcos[]>([])
    const [totalRequest, setTotalRequest] = useState<number>(0)

    const params = useParams()

    const GetProducts = () => {
        const actProducts = products.filter((product) => { return (product.idRestaurante == restaurantId) })
        setProductsToRender(actProducts)
    }
    const openModalCart = () => {
        setModalMarcos(true)
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

    return (
        <div className='restaurantMarcosContainer'>
            <RestaurantMarcosContext.Provider value={{
                actRestaurant,
                productsToRender,   
                openModalMarcos,
                setModalMarcos,
                request,
                setRequest,
                totalRequest,
                setTotalRequest,
            }}>
                <Navbar cartOffCanvas={openModalCart}/>
                <div className='titleRestaurant'>
                    <Card />
                </div>
                <div className="container">
                    <h1 className='title'>Produtos</h1>
                    <section className="actRestaurant">                                       
                        {productsToRender.map((product) => {
                            return (
                                <CardProducts key={product.id} url={product.url} nome={product.nome} valor={product.valor}
                                idRestaurante={product.idRestaurante} promocao={product.promocao} valorPromocional={product.valorPromocional}
                                descricao={product.descricao} id={product.id} productId={0}></CardProducts>
                            )
                        })}
                    </section> 
                </div>
                <ModalMarcos/>
            </RestaurantMarcosContext.Provider>
        </div>
    )
}
