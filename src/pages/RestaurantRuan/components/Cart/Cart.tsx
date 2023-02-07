import React, { useContext, useEffect, useState } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import CloseIcon from '../../../../assets/images/close.svg'
import './style.scss'
import { Product } from './components/Product/Product'
import { ICartProduct, IProduct } from '../../../../interfaces/interfaces'

export const Cart = () => {

    const { offCanvas, setOffCanvas, actRestaurant, productsToRender, request } = useContext(RestaurantRuanContext)

    const [cartProducts, setCartProducts] = useState([])

    const CloseCart = () => {
        setOffCanvas(false)
    }

    useEffect(() => {
        setCartProducts(request)
    }, [request])

    if (offCanvas) {
        return (
            <section className='cartOffCanvas'>
                <div className="cartContainer">
                    <div className="header">
                        <span className='close' onClick={CloseCart}><img src={CloseIcon} alt="fechar" /></span>
                        <div className="headerText">
                            <span>Seu pedido em</span>
                            <h2>{actRestaurant.nome}</h2>
                        </div>
                    </div>
                    <div className="products">
                        {cartProducts.map((product: ICartProduct) => {
                            return <Product key={product.productId} productId={product.productId} count={product.count} />
                        })}

                    </div>
                </div>
            </section>
        )
    } else {
        return null
    }
}


