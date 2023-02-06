import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { api } from '../../api/api'
import { IProduct, IRestaurant } from '../../interfaces/interfaces'
import CardProducts from "../../components/CardProducts/CardProducts"
import "./style.scss"

export const RestaurantMarcos = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([])    
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
        <div className='restaurantMarcosContainer'>
            <Navbar />
            <div>
                
            </div>
            <div className="container">
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
            </div>
        </div>
    )
}
