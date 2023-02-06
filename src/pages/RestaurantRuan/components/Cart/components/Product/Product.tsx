import React from 'react'
import './style.scss'

export const Product = () => {
    return (
        <article className='cartProductContainer'>
            <div className="product">
                <h3>1x Produto 1</h3>
                <h3>R$ 00,00</h3>
            </div>
            <div className="productDescription">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='remove'>
                <span>Remover</span>
            </div>
        </article>
    )
}
