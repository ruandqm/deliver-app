import { useEffect, useState } from "react"
import { ICartProductMarcos, IProduct } from "../../../../interfaces/interfaces"
import "./style.scss"
import { useContext } from "react"
import { RestaurantMarcosContext } from "../../../../contexts/contexts"
import axios from "axios"

const CardProducts: React.FC<IProduct & ICartProductMarcos> = (props) => {
    const { actRestaurant } = useContext(RestaurantMarcosContext)
    const [counterProduct, setCounterProduct] = useState<number>(0)
    const [counterValue, setCounterValue] = useState<number>(0)
    const [request, setRequest] = useState<ICartProductMarcos[]>([{
        productId: props.id,
        counter: 0,
        value: 0,
        descricion: props.descricao,
    }]);

    const addToCart = () => {
        setCounterProduct(counterProduct === 0 ? counterProduct + 1 : 1);
        let value = 0;
        if (props.promocao === "false") {
            value = counterValue ? counterValue + props.valor : props.valor;
        } else {
            value = counterValue ? counterValue + props.valorPromocional : props.valorPromocional;
        }
        setCounterValue(value);

        const index = request.findIndex(r => r.productId === props.id);
        if (index === -1) {
            setRequest([...request, {
                productId: props.id,
                counter: counterProduct,
                value: counterValue,
                descricion: props.descricao,
            }]);
            console.log(request)
        } else {
            const updatedRequest = [...request];
            updatedRequest[index].counter = counterProduct;
            updatedRequest[index].value = counterValue;
            setRequest(updatedRequest);
            console.log(request)
        }
    }


    useEffect(() => {

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
                <button onClick={addToCart} className="btnAddedCart" type="submit">➕ Adicionar ao carrinho</button>
                <span className="quantity"> Quantidade ➖ {counterProduct}</span>
            </div>
        </section>
    )

}

export default CardProducts