import usersService from "../../services/user.services"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "../../components/Loader/Loader"
import { Link } from 'react-router-dom'

const UserDetails = () => {

    const [user, setUser] = useState({})

    const { user_id } = useParams()

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = () => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                console.log(data)
                setUser(data)
            })
            .catch(err => console.error(err))
    }

    const navigate = useNavigate()

    const handleDelete = () => {

        usersService
            .deleteUser(user_id)
            .then(() => navigate('/users'))
            .catch(err => console.error(err))
    }

    return (
        <Container>

            {
                !user ?
                    <Loader />
                    :
                    <>
                        <h1>{user.name}</h1>
                        <hr />

                        <Row className="UserDetails">

                            <Col md={{ span: 4, offset: 1 }}>
                                <img src={user.images} />
                            </Col>

                            <Col md={{ span: 6, offset: 1 }}>
                                <h3>User</h3>
                                <p>{user.username}</p>
                                <ul>
                                    <li>Email: {user.email}</li>
                                    <li>Size:: {user.clientSize}</li>
                                    <li>Suscribed: {user.sizes}</li>
                                    <li>Date of birth: {user.dateOfBirth}</li>
                                    <li>Address: {user.address}</li>
                                    <li>Favourites shirts: </li>
                                </ul>

                                <Link to="/users">
                                    <Button variant="outline-secondary" as="div">Back to users</Button>
                                </Link>

                                <Link to={`/editUser/${user_id}`}>
                                    <Button variant="outline-secondary" as="div">Edit</Button>
                                </Link>

                                <Button variant="danger" as="div" onClick={handleDelete}>Delete</Button>

                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )

}

export default UserDetails