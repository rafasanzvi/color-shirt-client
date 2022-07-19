import { useState } from "react"
import { useEffect } from "react"
import shirtsService from "../../services/shirt.services"


const ShirtsListPage = () => {

    const [shirtList, setShirtList] = useState([])

    useEffect(() => {

        shirtsService
            .getShirts()
            .then(response => {
                console.log(response.data)
                setShirtList(response.data)
            })
            .catch(err => console.error(err))

    }, [])


    return (<h1>{shirtList[0]?.name}</h1>)
}

export default ShirtsListPage