import { useState } from "react"
import { useEffect } from "react"
import shirtsService from "../../services/shirt.services"
import { Container } from "react-bootstrap"
import ShirtsList from "../../components/Navigation/ShirtsList/ShirtsList"
import Loader from "../../components/Loader/Loader"
import usersService from "../../services/user.services"
import './ShirtListPage.css'


const ShirtsListPage = () => {

    const [shirtList, setShirtList] = useState([])
    const [favShirts, setFavShirts] = useState([])

    useEffect(() => {
        loadshirts()
        loadfavshirts()
    }, [])

    const loadshirts = () => {
        shirtsService
            .getShirts()
            .then(({ data }) => {
                setShirtList(data)
            })
            .catch(err => console.error(err))
    }

    const loadfavshirts = () => {
        usersService
            .getUserShirtFavs()
            .then(({ data }) => {
                setFavShirts(data)
            })
            .catch(err => console.error(err))
    }

    return (

        <Container className="index-container-shirt-list">

            <h1>Shirts gallery</h1>

            <hr />

            {
                shirtList.length ? <ShirtsList shirtList={shirtList} favShirts={favShirts} loadfavshirts={loadfavshirts} /> : <Loader />
            }

        </Container>

    )

}

export default ShirtsListPage