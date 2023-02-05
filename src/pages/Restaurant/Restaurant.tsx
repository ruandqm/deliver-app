import { useParams } from "react-router-dom"
import { Loading } from "../../components/Loading/Loading"
import './style.scss'

export const Restaurant = () => {
    const params = useParams()

    if (params.id == ':1') {
        window.location.replace(`/restaurantMarcos/${params.id}`)
    } else {
        window.location.replace(`/restaurantRuan/${params.id}`)
    }

    return <div className="restaurantLoaderContainer"><Loading /></div>

}