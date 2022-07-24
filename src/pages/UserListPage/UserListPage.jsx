import { Container, Row } from "react-bootstrap"
import usersService from "../../services/user.services"
import Loader from "../../components/Loader/Loader"
import { useState, useEffect } from "react"
import UserList from "../../components/Navigation/UserList/UserList"

const UserListPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        usersService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <h1>User list</h1>

            <hr />

            <Row>
                <UserList users={users} />
            </Row>

        </Container>
    )

}

export default UserListPage