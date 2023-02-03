import { IRestaurant } from "../../interfaces/index"
import "./style.scss"
import StarIcon from "../../assets/images/star.svg"

const Card: React.FC<IRestaurant> = (props) => {

    return (
        <div className="cardContainer">
            <img src={props.url} />
            <h3 className="propertiesName">{props.nome}</h3>
            <p> <img src={StarIcon} className="properties" /> {props.avaliacao} - {props.categoria}</p>
            <p className="propertiesSobre">{props.sobre}</p>
        </div>
    )
}

export default Card