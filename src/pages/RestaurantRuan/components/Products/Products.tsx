import React, { useContext } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import { IProduct } from '../../../../interfaces/interfaces'
import { ProductCard } from '../ProductCard/ProductCard'
import './style.scss'


export const Products = () => {
    const { productsToRender } = useContext(RestaurantRuanContext)

    return (
        <section className='productsContainer'>
            <h2>Produtos</h2>
            <div className="products">
                {productsToRender.map((product: IProduct) => {
                    return <ProductCard key={product.id} data={product} />
                })}
            </div>

        </section>
    )
}
