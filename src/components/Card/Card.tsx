import { IRestaurant } from "../../interfaces/index"
import "./style.scss"

const Img: React.FC<IRestaurant> = (props) => {

    return (
        
            <div className="card">

                <img src={props.url} />
                <h3>{props.nome}</h3>
                <p>{props.avaliacao}</p> <span>{props.categoria}</span>
                <p>{props.sobre}</p>

            </div>

    )
}

export default Img