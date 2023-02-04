import { useParams, redirect } from "react-router-dom"
import { Loading } from "../../components/Loading/Loading"
import './style.scss'

export const Restaurant = () => {
    const params = useParams()

    if (params.id == ':1') {
        window.location.replace('/restaurantMarcos')
    } else {
        window.location.replace('/restaurantRuan')
    }

    return <div className="restaurantLoaderContainer"><Loading /></div>

}