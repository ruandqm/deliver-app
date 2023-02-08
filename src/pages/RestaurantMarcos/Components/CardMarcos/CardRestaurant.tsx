import "./style.scss"
import StarIcon from "../../../../assets/images/star.svg"
import { useContext } from "react"
import { RestaurantMarcosContext } from "../../../../contexts/contexts"

const Card = () => {

    const {actRestaurant} = useContext(RestaurantMarcosContext)

    return (
        <section className="cardContainerMarcos">
            <img className="logoMarcos" src={actRestaurant?.url} />
            <div className="detailsMarcos">
                <h3 className="propertiesName">{actRestaurant?.nome}</h3>
                <span className="rate"> <img src={StarIcon} /> <span>{actRestaurant?.avaliacao}</span> • {actRestaurant?.categoria}</span>
            </div>
        </section>
    )
}

export default Card