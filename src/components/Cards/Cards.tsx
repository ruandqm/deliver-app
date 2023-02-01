import Card from "../Card/Card"
import "./style.scss"
import {ICards, IRestaurant} from "../../interfaces/index"

const RestaurantList: React.FC<ICards> = ({ data, status }) => {
    const restaurantCard = (restaurants: IRestaurant[]) => {
        return restaurants.map((restaurant) => {
            return <Card key={restaurant.id} id={restaurant.id} nome={restaurant.nome} categoria={restaurant.categoria}
            avaliacao={restaurant.avaliacao} sobre={restaurant.sobre} url={restaurant.url} ></Card>
        })
    }
    return (

        <>
            <div>
                {status === "loading" && <div>Loading...</div>}
                {status === "error" && <div>Error fetching produtos</div>}
                {status === "success" && <section className="cards"> {restaurantCard(data)}</section>}
            </div>
        </>
    )
}

export default RestaurantList