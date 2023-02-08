import React, { useContext, useEffect, useState } from 'react'
import { RestaurantRuanContext } from '../../../../../../contexts/contexts'
import { ICartProduct, IProduct } from '../../../../../../interfaces/interfaces'
import './style.scss'

export const Product = (props: ICartProduct) => {

    const {
        productsToRender,
        request,
        productCountAltered,
        setProductCountAltered,
        totalRequestValue,
        setTotalRequestValue } = useContext(RestaurantRuanContext)

    const [productInfo, setProductInfo] = useState<IProduct>()
    const [productCount, setProductCount] = useState<number>(0)
    const [totalValue, setTotalValue] = useState<number>()

    const GetProductInfo = () => {
        const productMatch = productsToRender.find((product: IProduct) => {
            return product.id === props.productId
        })
        setProductInfo(productMatch)
    }

    const TotalRequestValueHandler = () => {
        if (productInfo != undefined) {
            {
                if (productInfo.promocao === 'true') {
                    const promoValue = parseFloat((productInfo.valorPromocional).toFixed(2))
                    setTotalValue(promoValue * productCount)
                } else {
                    const normalValue = parseFloat((productInfo.valor).toFixed(2))
                    setTotalValue(normalValue * productCount)
                }
                /* if (productInfo.promocao === 'true') {
                    const promoValue = parseFloat((productInfo.valorPromocional).toFixed(2))
                    setTotalValue(promoValue * productCount)
                    if (add) {
                        setTotalRequestValue((totalRequestValue: number) => totalRequestValue + promoValue)
                    } else {
                        setTotalRequestValue((totalRequestValue: number) => totalRequestValue - promoValue)
                    }
                } else {
                    const normalValue = parseFloat((productInfo.valor).toFixed(2))
                    setTotalValue(normalValue * productCount)
                    if (add) {
                        console.log('add')
                        setTotalRequestValue((totalRequestValue: number) => totalRequestValue + normalValue)
                    } else {
                        setTotalRequestValue((totalRequestValue: number) => totalRequestValue - normalValue)
                    }
                } */
            }
        }
    }
    /*  const TotalRequestValueHandler = (add: boolean) => {
         if (productInfo !== undefined) {
             if (productInfo.promocao === 'true') {
                 const promoValue = parseFloat((productInfo.valorPromocional).toFixed(2));
                 setTotalValue(promoValue * productCount);
                 if (add) {
                     setTotalRequestValue((prevValue: number) =>
                         prevValue !== undefined ? prevValue + promoValue : promoValue
                     );
                 } else {
                     setTotalRequestValue((prevValue: number) =>
                         prevValue !== undefined ? prevValue - promoValue : -promoValue
                     );
                 }
             } else {
                 const normalValue = parseFloat((productInfo.valor).toFixed(2));
                 setTotalValue(normalValue * productCount);
                 if (add) {
                     setTotalRequestValue((prevValue: number) =>
                         prevValue !== undefined ? prevValue + normalValue : normalValue
                     );
                 } else {
                     setTotalRequestValue((prevValue: number) =>
                         prevValue !== undefined ? prevValue - normalValue : -normalValue
                     );
                 }
             }
         }
     } */



    const RemoveProduct = () => {
        if (request.find((obj: ICartProduct, index: number) => {
            if (obj.productId == props.productId) {
                obj.count = obj.count - 1
                if (obj.count === 0) {
                    request.splice(index, 1)

                } else {
                    setProductCount(obj.count)
                }
                setProductCountAltered(!productCountAltered)

                return true
            }
            return false
        })) {
        }
        if (productInfo != undefined) {
            if (productInfo.promocao === 'true') {
                setTotalRequestValue((totalRequestValue: number) => totalRequestValue - productInfo.valorPromocional)
            } else {
                setTotalRequestValue((totalRequestValue: number) => totalRequestValue - productInfo.valor)
            }
        }

    }


    useEffect(() => {
        GetProductInfo()
    }, [props])

    useEffect(() => {
        setProductCount(props.count)
    }, [request])

    useEffect(() => {
        TotalRequestValueHandler()
    }, [productCount])


    return (
        <article className='cartProductContainer'>
            <div className="product">
                <h3>{productCount}x {productInfo?.nome}</h3>
                {productInfo &&
                    <h3>
                        R$ {totalValue?.toFixed(2)}
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