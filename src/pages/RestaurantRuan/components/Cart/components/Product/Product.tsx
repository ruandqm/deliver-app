import React, { useContext, useEffect, useState } from 'react'
import { RestaurantRuanContext } from '../../../../../../contexts/contexts'
import { ICartProduct, IProduct } from '../../../../../../interfaces/interfaces'
import './style.scss'

export const Product = (props: ICartProduct) => {

    const { productsToRender, request } = useContext(RestaurantRuanContext)
    const [productInfo, setProductInfo] = useState<IProduct>()

    const GetProductInfo = () => {
        const productMatch = productsToRender.find((product: IProduct) => {
            return product.id === props.productId
        })
        setProductInfo(productMatch)
    }
    const RemoveProduct = () => {
        if (request.find((obj: ICartProduct) => {
            if (obj.productId == props.productId) {
                obj.count = obj.count - 1
                return true
            }
            return false
        })) { }
    }


    useEffect(() => {
        GetProductInfo()
    }, [props])

    return (
        <article className='cartProductContainer'>
            <div className="product">
                <h3>{props.count}x {productInfo?.nome}</h3>
                {productInfo &&
                    <h3>
                        R$ {productInfo.promocao === 'true' ? (
                            (productInfo.valorPromocional * props.count).toFixed(2)
                        ) : ((productInfo.valor * props.count).toFixed(2))}
                    </h3>
                }
            </div>
            <div className="productDescription">
                <p>{productInfo?.descricao}</p>
            </div>
            <div className='remove'>
                <span onClick={RemoveProduct}>Remover</span>
            </div>
        </article>
    )
}
