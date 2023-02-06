import { IProduct } from "../../interfaces/interfaces"
import "./style.scss"
import StarIcon from "../../assets/images/star.svg"

const CardProducts: React.FC<IProduct> = (props) => {    

        return (
            <div className="cardContainerProducts">
                <img className="logo" src={props.url} />
                <div className="details">
                    <h3 className="propertiesName">{props.nome}</h3>
                    <p className="propertiesDescrition">{props.descricao}</p>

                    {props.promocao === "true" ? (<div className="values"> <span className="noPromotion">R$ {props.valor}0</span>
                        <span className="promotion">Valor Promocional: R$ {props.valorPromocional}0</span> </div>) :
                        (<div className="values"><span className="value">R$ {props.valor}0</span></div>)}

                    <button onClick={props.OpenModalMarcos} className="btnAddedCart" type="submit">➕  Adicionar ao carrinho</button>

                </div>
            </div>
        )
    
}

export default CardProducts