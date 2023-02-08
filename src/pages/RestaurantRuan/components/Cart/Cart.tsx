import React, { useContext, useEffect, useRef, useState } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import CloseIcon from '../../../../assets/images/close.svg'
import './style.scss'
import { Product } from './components/Product/Product'
import { ICartProduct, IProduct } from '../../../../interfaces/interfaces'
import axios from 'axios'

export const Cart = () => {
    const offCanvasRef = useRef(null)
    const {
        offCanvas,
        setOffCanvas,
        actRestaurant,
        productsToRender,
        request,
        totalRequestValue } = useContext(RestaurantRuanContext)

    const CloseCart = () => {
        setOffCanvas(false)
    }

    const RegistRequest = () => {
        const requestValues = {
            "restaurantLogo": actRestaurant.url,
            "restaurantName": actRestaurant.nome,
            "products": request
        }
        axios.post('https://apigenerator.dronahq.com/api/9x07oRHk/deliveryRequests', requestValues)
        alert('Pedido registrado com sucesso!')
    }

    if (offCanvas) {
        return (
            <section className='cartOffCanvas' ref={offCanvasRef}>
                <div className="cartContainer">
                    <div className="header">
                        <span className='close' onClick={CloseCart}><img src={CloseIcon} alt="fechar" /></span>
                        <div className="headerText">
                            <span>Seu pedido em</span>
                            <h2>{actRestaurant.nome}</h2>
                        </div>
                    </div>
                    <div className="products">
                        {request.map((product: ICartProduct) => {
                            return <Product
                                key={product.productId} productId={product.productId} count={product.count} />
                        })}

                    </div>
                    <h3>Total: R$ {totalRequestValue.toFixed(2)}</h3>
                    <button onClick={RegistRequest} className='finishRequest'>Finalizar Pedido</button>
                </div>
            </section>
        )
    } else {
        return null
    }
}


