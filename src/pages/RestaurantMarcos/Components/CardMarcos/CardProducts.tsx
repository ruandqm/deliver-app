import { useEffect, useState } from "react"
import { ICartProductMarcos, IProduct } from "../../../../interfaces/interfaces"
import { useContext } from "react"
import { RestaurantMarcosContext } from "../../../../contexts/contexts"
import "./styleCardProduct.scss"
import axios from "axios"

const CardProducts: React.FC<IProduct & ICartProductMarcos> = (props) => {
    const { request, setRequest, totalRequest, setTotalRequest } = useContext(RestaurantMarcosContext)
    const [counterProduct, setCounterProduct] = useState<number>(0)
    const [counterValue, setCounterValue] = useState<number>(0)     

    const count = () => {
        let counter = counterProduct + 1
        setCounterProduct(counter)

        let value = 0
        let valueProduct = 0
        if (props.promocao === "false") {
            value = counterValue + props.valor
            valueProduct = props.valor
            setCounterValue(value);            

        } else {
            value = counterValue + props.valorPromocional
            valueProduct = props.valorPromocional
            setCounterValue(value);            
        }

        let array = Array.isArray(request) ? [...request] : []

        const newRequest = { productId: props.id, count: counter, value: value, valueIndividual: valueProduct, name: props.nome, 
            descricion: props.descricao}

        if (array.find((element) => element.productId === props.id)) {
            array.forEach((element) => {
                if (element.productId === props.id) {
                    element.count = counter
                    element.value = value
                    setRequest(array)
                    console.log(array)
                    return
                }
            })
        } else {
            array.push(newRequest)
            setRequest(array)
            console.log(array)
        }
        window.localStorage.setItem(JSON.stringify(props.id), JSON.stringify(newRequest))
    }

    useEffect(() => {
       let total = 0
       request.map((item: ICartProductMarcos) => {
        total = total + (item.value || 0)
       })
       setTotalRequest(total)     

    }, [request])


    return (
        <section className="cardContainerProducts">
            <img className="logo" src={props.url} />
            <div className="details">
                <h3 className="propertiesName">{props.nome}</h3>
                <p className="propertiesDescrition">{props.descricao} </p>
                {props.promocao === "true" ? (<div className="values"> <span className="noPromotion">R$ {props.valor}0</span>
                    <span className="promotion">Valor Promocional: R$ {props.valorPromocional}0</span> </div>) :
                    (<div className="values"><span className="value">R$ {props.valor}0</span></div>)}
                <button onClick={count} className="btnAddedCart" type="submit">➕ Adicionar ao carrinho</button>
                <span className="quantity"> 🛒 ➖  {counterProduct}</span>
            </div>
        </section>
    )

}

export default CardProducts