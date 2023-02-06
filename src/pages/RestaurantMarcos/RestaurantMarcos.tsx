import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import { IProduct, IRestaurant } from '../../interfaces/interfaces'
import CardProducts from "./Components/CardMarcos/Card"
import "./style.scss"
import Card from './Components/CardMarcos/Card'
import { RestaurantMarcosContext } from '../../contexts/contexts'

export const RestaurantMarcos = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([])
    const [restaurant, setRestaurant] = useState<IRestaurant[]>([])
    const [products, setProducts] = useState<IProduct[]>([])
    const [productsToRender, setProductsToRender] = useState<IProduct[]>([])
    const params = useParams()
    const [openModalMarcos, setModalMarcos] = useState(false)

    const GetProducts = () => {
        if (params.id != undefined) {
            const idRestaurant = parseInt(params.id.slice(1, params.id.length))
            const actProducts = products.filter((product) => { return (product.idRestaurante == idRestaurant) })
            setProductsToRender(actProducts)

            const actRestaurant = restaurants.filter((element) => { return (element.id === idRestaurant) })
            setRestaurant(actRestaurant)
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
        <div className='restaurantMarcosContainer'>
            <Navbar />
            <div className='titleRestaurant'>
                {restaurant.map((element) => {
                    return (<Card key={element.id} url={element.url} nome={element.nome} avaliacao={element.avaliacao}
                        categoria={element.categoria} sobre={element.sobre} id={element.id}></Card>)
                })}
            </div>
            <div className="container">
                <RestaurantMarcosContext.Provider value={{
                    openModalMarcos,
                    setModalMarcos
                }}>
                    <h1 className='title'>Produtos</h1>
                    <section className="actRestaurant">
                        {productsToRender.map((product) => {
                            return (
                                <CardProducts key={product.id} url={product.url} nome={product.nome} valor={product.valor}
                                    idRestaurante={product.idRestaurante} promocao={product.promocao} valorPromocional={product.valorPromocional}
                                    descricao={product.descricao} id={product.id}></CardProducts>
                            )
                        })}
                    </section>
                </RestaurantMarcosContext.Provider>
            </div>
        </div>
    )
}
