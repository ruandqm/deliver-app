import axios from "axios"
import { useContext, useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "react-query";
import Cards from "../Cards/Cards"
import { RestaurantFilters } from "./components/RestaurantFilters";
import { HomeContext } from "../../contexts";

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
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const { search } = useContext(HomeContext)

    return (
        <HomeContext.Provider value={{
            categoryFilter,
            setCategoryFilter,
            sortFilter,
            setSortFilter,
            filteredRestaurants,
            setFilteredRestaurants,
            data,
            status,
            search
        }}>
            <div className="searchRestaurantContainer">
                <RestaurantFilters />
                <Cards data={filteredRestaurants} status={status} />
            </div>
        </HomeContext.Provider>
    )
}

export default Restaurants