import React, { useContext, useEffect, useState } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import { IProduct } from '../../../../interfaces/interfaces'
import './style.scss'

interface IProps {
    data: IProduct
}

export const ProductCard = (props: IProps) => {
    const [count, setCount] = useState(0)
    const { request, setRequest } = useContext(RestaurantRuanContext)

    const AddProduct = () => {
        const newRequest = request
        newRequest[props.data.id] = count
        setRequest(newRequest)
        console.log(newRequest)
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
