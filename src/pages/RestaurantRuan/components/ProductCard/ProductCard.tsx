import React from 'react'
import { IProduct } from '../../../../interfaces/interfaces'
import './style.scss'

interface IProps {
    data: IProduct
}

export const ProductCard = (props: IProps) => {

    return (
        <article className='productCardContainer'>
            <div className="productInfo">
                <h3 className='title'>{props.data.nome}</h3>
                <p>{props.data.descricao}</p>
                <div className="values">
                    <h3>{props.data.promocao == 'true' ? `R$ ${props.data.valorPromocional}` : `R$ ${props.data.valor}`}</h3>
                    <s>{props.data.promocao == 'true' ? `R$ ${props.data.valor}` : null}</s>
                    <button><span className="material-symbols-outlined">
                        add_circle
                    </span>1</button>
                </div>
            </div>
            <img src={props.data.url} alt="imagem do produto" />

        </article>
    )
}
