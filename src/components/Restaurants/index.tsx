import axios from "axios"
import { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "react-query";
import Cards from "../Cards/Cards"
import { RestaurantFilters } from "./components/RestaurantFilters";
import { HomeFilterContext } from "../../contexts";

const qc = new QueryClient()

const LoadingAPI = async () => {
    const { data } = await axios.get(
        "https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes"
    );

    return data
}

function Restaurants() {
    return (
        <QueryClientProvider client={qc}>
            <SearchRestaurantInData />
        </QueryClientProvider>
    )
}

function SearchRestaurantInData() {
    const queryClient = useQueryClient();
    const { data, status } = useQuery("restaurants", LoadingAPI)
    const [categoryFilter, setCategoryFilter] = useState('all')
    const [sortFilter, setSortFilter] = useState('all')
    const [restaurantsToRender, setRestaurantsToRender] = useState(data)
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    return (
        <HomeFilterContext.Provider value={{
            categoryFilter,
            setCategoryFilter,
            sortFilter,
            setSortFilter,
            restaurantsToRender,
            setRestaurantsToRender,
            filteredRestaurants,
            setFilteredRestaurants,
            data,
            status
        }}>
            <div className="searchRestaurantContainer">
                <RestaurantFilters />
                <Cards data={filteredRestaurants} status={status} />
            </div>
        </HomeFilterContext.Provider>
    )
}

export default Restaurants