import { Container } from "react-bootstrap"
import usersService from "../../services/user.services"
import Loader from "../../components/Loader/Loader"

const UserListPage = () => {

    return (
        <Container>

            <h1>User list</h1>

            <hr />

            <p>No arriesgo usuario</p>

            {/* {
                shirtList.length ? <ShirtsList shirtList={shirtList} /> : <Loader />
            } */}

        </Container>
    )

}

export default UserListPage