import { useEffect } from "react"
import shirtsService from "../../services/shirt.services"


const ShirtsListPage = () => {

    useEffect(() => {

        shirtsService
            .getShirts()
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.error(err))

    }, [])


    return <h1>No arriesgo</h1>

}

export default ShirtsListPage