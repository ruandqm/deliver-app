import { IRestaurant } from "../../interfaces/index"
import "./style.scss"
import StarIcon from "../../assets/images/star.svg"
import { useState } from "react"

const Card: React.FC<IRestaurant> = (props) => {

    const [clickRestaurant, setClickRestaurant] = useState(0)

    return (
        <div onClick={() => setClickRestaurant(props.id)} className="cardContainer">
            <img src={props.url} />
            <h3 className="propertiesName">{props.nome}</h3>
            <p> <img src={StarIcon} className="properties" /> {props.avaliacao} - {props.categoria}</p>
            <p className="propertiesSobre">{props.sobre}</p>
        </div>
    )
}

export default Card