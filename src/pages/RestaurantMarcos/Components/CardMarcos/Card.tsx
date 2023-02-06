import { IRestaurant } from "../../../../interfaces/interfaces"
import "./style.scss"
import StarIcon from "../../../../assets/images/star.svg"

const Card = (props: any) => {
    const redirect = `/restaurant/:${props.id}`

    return (
        <section className="cardContainerMarcos">
            <img className="logoMarcos" src={props.url} />
            <div className="detailsMarcos">
                <h3 className="propertiesName">{props.nome}</h3>
                <span className="rate"> <img src={StarIcon} className="properties" /> <span>{props.avaliacao}</span> • {props.categoria}</span>
            </div>
        </section>
    )
}

export default Card