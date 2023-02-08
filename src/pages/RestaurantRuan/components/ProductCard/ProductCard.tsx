import React, { useContext, useEffect, useState } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import { ICartProduct, IProduct } from '../../../../interfaces/interfaces'
import './style.scss'

interface IProps {
    data: IProduct
}

export const ProductCard = (props: IProps) => {
    const [count, setCount] = useState(0)
    const [addingProduct, setAddingProduct] = useState(false)
    const {
        request,
        setRequest,
        actRestaurant,
        productCountAltered,
        setProductCountAltered,
        totalRequestValue,
        setTotalRequestValue } = useContext(RestaurantRuanContext)

    const AddProduct = () => {
        if (props.data.promocao === 'true') {
            setTotalRequestValue((totalRequestValue: number) => totalRequestValue + props.data.valorPromocional)
        } else {
            setTotalRequestValue((totalRequestValue: number) => totalRequestValue + props.data.valor)
        }

        const newRequest = request
        const productName = props.data.nome
        const productId = props.data.id

        if (newRequest.length != 0) {
            newRequest.map(() => {
                if (newRequest.find((obj: ICartProduct) => {
                    if (obj.productId == productId) {
                        obj.count = count
                        return true
                    }
                    return false
                })) {
                } else {
                    newRequest.push({ productId, count, productName })
                }
            })
        } else {
            newRequest.push({ productId, count, productName })
        }
        setRequest(newRequest)
        window.localStorage.setItem(JSON.stringify(actRestaurant.id), JSON.stringify(newRequest))

        setAddingProduct(false)
    }

    const GetProductCount = () => {
        if (!request.find((obj: ICartProduct) => {
            if (obj.productId == props.data.id) {
                setCount(obj.count)
                return true
            }
            return false
        })) { setCount(0) }
    }
    useEffect(() => {
        //  console.log(request)
        GetProductCount()
    }, [productCountAltered])

    useEffect(() => {
        count != 0 && addingProduct ? AddProduct() : null
    }, [count])

    useEffect(() => {
        GetProductCount()
    }, [request])

    return (
        <article className='productCardContainer'>
            <div className="productInfo">
                <h3 className='title'>{props.data.nome}</h3>
                <p>{props.data.descricao}</p>
                <div className="values">
                    <h3>{props.data.promocao == 'true' ? `R$ ${props.data.valorPromocional}` : `R$ ${props.data.valor}`}</h3>
                    <s>{props.data.promocao == 'true' ? `R$ ${props.data.valor}` : null}</s>
                    <button onClick={() => {
                        setAddingProduct(true)
                        setCount((count) => count + 1)
                    }}>
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>{count}</button>
                </div>
            </div>
            <img src={props.data.url} alt="imagem do produto" />

        </article>
    )
}
