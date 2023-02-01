import axios from "axios"
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "react-query";
import Cards from "../Cards/Cards"

const qc = new QueryClient()

const LoadingAPI = async () => {
    const { data } = await axios.get(
        "https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes"
    );

    return data
}

function SearchRestaurant() {
    return (
        <QueryClientProvider client={qc}>
            <SearchRestaurantInData />
        </QueryClientProvider>
    )
}

function SearchRestaurantInData() {
    const queryClient = useQueryClient();
    const { data, status } = useQuery("restaurants", LoadingAPI)
    return <Cards data={data} status={status} />
}

export default SearchRestaurant


