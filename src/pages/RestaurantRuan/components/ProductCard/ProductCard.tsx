import React, { useContext, useEffect, useState } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import { ICartProduct, IProduct } from '../../../../interfaces/interfaces'
import './style.scss'

interface IProps {
    data: IProduct
}

export const ProductCard = (props: IProps) => {
    const [count, setCount] = useState(0)
    const { request, setRequest, actRestaurant } = useContext(RestaurantRuanContext)

    const AddProduct = () => {
        const newRequest = request
        const productId = props.data.id

        if (newRequest.length != 0) {
            newRequest.map((req: ICartProduct) => {
                if (newRequest.find((obj: ICartProduct) => {
                    if (obj.productId == productId) {
                        obj.count = count
                        return true
                    }
                    return false
                })) {
                } else {
                    newRequest.push({ productId, count })
                }
            })
        } else {
            newRequest.push({ productId, count })
        }
        setRequest(newRequest)
        window.localStorage.setItem(JSON.stringify(actRestaurant.id), JSON.stringify(newRequest))
    }

    useEffect(() => {
        count != 0 ? AddProduct() : null
    }, [count])

    return (
        <article className='productCardContainer'>
            <div className="productInfo">
                <h3 className='title'>{props.data.nome}</h3>
                <p>{props.data.descricao}</p>
                <div className="values">
                    <h3>{props.data.promocao == 'true' ? `R$ ${props.data.valorPromocional}` : `R$ ${props.data.valor}`}</h3>
                    <s>{props.data.promocao == 'true' ? `R$ ${props.data.valor}` : null}</s>
                    <button onClick={() => setCount((count) => count + 1)}><span className="material-symbols-outlined">
                        add_circle
                    </span>{count}</button>
                </div>
            </div>
            <img src={props.data.url} alt="imagem do produto" />

        </article>
    )
}
