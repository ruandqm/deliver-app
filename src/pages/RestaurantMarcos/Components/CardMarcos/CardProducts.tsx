import { useEffect, useState } from "react"
import { IProduct } from "../../../../interfaces/interfaces"
import "./style.scss"
import { useContext } from "react"
import { RestaurantMarcosContext } from "../../../../contexts/contexts"

const CardProducts: React.FC<IProduct> = (props) => {

    const { actRestaurant } = useContext(RestaurantMarcosContext)

    const [counterProduct, setCounterProduct] = useState(0)
    const [productId, setProductId] = useState<number>()
    const [productValor, setProductValor] = useState<number>(0)     

    const counter = () => {
        const added = counterProduct + 1
        setCounterProduct(added)
        
        
        if(props.promocao === "false"){
            const values = productValor + props.valor
            setProductValor(values)
            
        }else{
            const values = productValor + props.valorPromocional
            setProductValor(values)
        }

        window.localStorage.setItem(JSON.stringify(actRestaurant.id), JSON.stringify(counterProduct))
    }
    
    
    useEffect(() => {
        setProductId(props.id)
        
    }, [props])

        return (
            <div className="cardContainerProducts">
                <img className="logo" src={props.url} />
                <div className="details">
                    <h3 className="propertiesName">{props.nome}</h3>
                    <p className="propertiesDescrition">{props.descricao}</p>

                    {props.promocao === "true" ? (<div className="values"> <span className="noPromotion">R$ {props.valor}0</span>
                        <span className="promotion">Valor Promocional: R$ {props.valorPromocional}0</span> </div>) :
                        (<div className="values"><span className="value">R$ {props.valor}0</span></div>)}

                    <button onClick={counter} className="btnAddedCart" type="submit">➕ Adicionar ao carrinho</button>
                    <span className="quantity"> Quantidade ➖ {counterProduct} </span> 

                </div>
            </div>
        )

}

export default CardProducts