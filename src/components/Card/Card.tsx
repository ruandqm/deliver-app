import { IRestaurant } from "../Cards/Cards"

const Img: React.FC<IRestaurant> = (props) => {

    return (

        
            <div className="card">

                <img src={props.url} />
                <h3>{props.name}</h3>
                <p>{props.rating}</p> <span>{props.category}</span>
                <p>{props.about}</p>

            </div>

    )
}

export default Img