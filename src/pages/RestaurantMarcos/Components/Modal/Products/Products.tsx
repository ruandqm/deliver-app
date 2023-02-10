import React from 'react'
import "./style.scss"
import axios from 'axios'
import { RestaurantMarcosContext } from "../../../../../contexts/contexts"
import { useContext } from "react"
import { ICartProductMarcos } from '../../../../../interfaces/interfaces'

const Products = () => {
    const { request, setRequest, actRestaurant } = useContext(RestaurantMarcosContext)
    
    window.localStorage.setItem(JSON.stringify(actRestaurant.id), JSON.stringify(request))

    return (
        <section className='containerModalProductsMarcos'>
            {request.map((product: ICartProductMarcos) => {
                return (
                    <>
                        <div className='containerCartProducts'>
                            <div className="properties">
                                <span className="propertiesCountNameValue">{product.count}x ➖ {product.name} ➖ Valor: R${product.value?.toFixed(2)}</span>
                            </div>
                            <div className="productDescription">
                                <p>{product.descricion}</p>
                            </div>
                            <p className='remove'>Remover</p>
                        </div>
                    </>
                )
            })}
        </section>
    )
}

export default Products
