import Card from "../Card/Card"

export interface IRestaurant {  
    url: string,
    name: string,
    category: string,
    rating: number,
    about: string,
    id: number,
}

interface ICards {
    data: IRestaurant[],
    status: string
}

const RestaurantList: React.FC<ICards> = ({ data, status }) => {
    const restaurantCard = (restaurants: IRestaurant[]) => {
        return restaurants.map((restaurant) => {
            return <Card key={restaurant.id} id={restaurant.id} name={restaurant.name} category={restaurant.category}
            rating={restaurant.rating} about={restaurant.about} url={restaurant.url} ></Card>
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