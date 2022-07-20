import { useState } from "react"
import { useEffect } from "react"
import shirtsService from "../../services/shirt.services"
import { Container, Row } from "react-bootstrap"
import ShirtsList from "../../components/Navigation/ShirtsList/ShirtsList"


const ShirtsListPage = () => {

    const [shirtList, setShirtList] = useState([])

    useEffect(() => {

        shirtsService
            .getShirts()
            .then(({ data }) => {
                setShirtList(data)
            })
            .catch(err => console.error(err))

    }, [])


    return (

        <Container>

            <h1>Shirts gallery</h1>

            <hr />

            <ShirtsList shirtList={shirtList} />

        </Container>

    )

}

export default ShirtsListPage