import { useState } from "react"
import { useEffect } from "react"
import shirtsService from "../../services/shirt.services"
import { Container } from "react-bootstrap"
import ShirtsList from "../../components/Navigation/ShirtsList/ShirtsList"
import Loader from "../../components/Loader/Loader"


const ShirtsListPage = () => {

    const [shirtList, setShirtList] = useState([])

    useEffect(() => {
        loadshirts()
    }, [])

    const loadshirts = () => {
        shirtsService
            .getShirts()
            .then(({ data }) => {
                setShirtList(data)
            })
            .catch(err => console.error(err))
    }


    return (

        <Container>

            <h1>Shirts gallery</h1>

            <hr />

            {
                shirtList.length ? <ShirtsList shirtList={shirtList} /> : <Loader />
            }

        </Container>

    )

}

export default ShirtsListPage