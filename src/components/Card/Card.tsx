import { IRestaurant } from "../../interfaces/interfaces"
import "./style.scss"
import StarIcon from "../../assets/images/star.svg"

const Card: React.FC<IRestaurant> = (props) => {
    const redirect = `/restaurant/:${props.id}`

    return (
        <a href={redirect} className="cardContainer">
            <img className="logo" src={props.url} />
            <div className="details">
                <h3 className="propertiesName">{props.nome}</h3>
                <span className="rate"> <img src={StarIcon} className="properties" /> <span>{props.avaliacao}</span> • {props.categoria}</span>
                <p className="propertiesSobre">{props.sobre}</p>
            </div>
        </a>
    )
}

export default Card