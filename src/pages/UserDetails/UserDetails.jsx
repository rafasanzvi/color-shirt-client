import usersService from "../../services/user.services"
import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "../../components/Loader/Loader"
import { Link } from 'react-router-dom'
import './UserDetails.css'
import ShirtCard from "../../components/ShirtCard/ShirtCard"
import '../../components/ShirtCard/ShirtCard.css'
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from "../../context/auth.context"
import { getFullDate } from "../../utils/dateFormatter"
import Stripe from "../../components/Stripe/Stripe"

const UserDetails = () => {

    const { setShowMessage } = useContext(MessageContext)
    const { user: loggedUser } = useContext(AuthContext)


    const [profileUser, setProfileUser] = useState({})
    const [suscriptionModal, setSuscriptionModal] = useState(false)

    const { user_id } = useParams()

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = () => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                setProfileUser(data)
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

    const subscription = () => {

        usersService
            .addToSubscribed()
            .then(() => {
                loadUserDetails()
                setSuscriptionModal(true)
                // setShowMessage({ show: true, title: 'Welcome to Policroma', text: 'Your new style is in progress' })
            })
            .catch(err => console.error(err))
    }

    const unSubscription = () => {

        usersService
            .removeToSubscribed()
            .then(() => {
                loadUserDetails()
                setSuscriptionModal(false)
                setShowMessage({ show: true, title: 'Sooo Sad :(', text: 'it has been a pleasure to have you with us' })
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Container>

                {
                    !loggedUser ?
                        <Loader />
                        :
                        <>
                            <h1>{profileUser.name}</h1>
                            <hr />

                            <Row className="UserDetails">

                                <Col md={{ span: 4, offset: 1 }}>
                                    <img src={profileUser.images} />
                                </Col>

                                <Col md={{ span: 6, offset: 1 }}>
                                    <h3>User</h3>
                                    <p>{profileUser.username}</p>
                                    <ul>
                                        <li>Email: {profileUser.email}</li>
                                        <li>Size: {profileUser.clientSize}</li>
                                        {
                                            profileUser.isSuscribed
                                                ?
                                                <li>Suscribed: Yes</li>
                                                :
                                                <li>Suscribed: No</li>
                                        }
                                        <li>Date of birth: {getFullDate(profileUser.dateOfBirth)}</li>
                                        <li>Address: {profileUser.address}</li>
                                    </ul>


                                    {profileUser.isSuscribed
                                        ?
                                        <Button variant="outline-secondary" as="div" onClick={() => unSubscription()}>Cancel subscription</Button>
                                        :
                                        <Button variant="outline-secondary" as="div" onClick={() => subscription()}>Subscription</Button>
                                    }

                                    {
                                        (loggedUser.role === 'ADMIN') &&
                                        <>
                                            <Link to="/users">
                                                <Button variant="outline-secondary" as="div">Back to users</Button>
                                            </Link>
                                            <Link to={`/editUser/${user_id}`}>
                                                <Button variant="outline-secondary" as="div">Edit</Button>
                                            </Link>
                                            <Button variant="danger" as="div" onClick={handleDelete}>Delete</Button>
                                        </>
                                    }
                                </Col>
                            </Row>

                            <h1>My favourites shirts</h1>
                            <hr />
                            <Row className="favShirts-row">

                                {profileUser.favouriteShirts?.map(shirt => {
                                    return <Col md={3}><ShirtCard {...shirt} favShirt={true} /></Col>
                                })}

                            </Row>
                        </>
                }
            </Container>

            {suscriptionModal && <Stripe />}
        </>
    )
}
export default UserDetails