import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import shirtsService from "../../services/shirt.services"
import Loader from "../../components/Loader/Loader"
import './ShirtDetails.css'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/auth.context"


const ShirtDetails = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const [shirt, setShirt] = useState({})

    const { shirt_id } = useParams()

    useEffect(() => {
        loadShirtDetails()
    }, [])

    const loadShirtDetails = () => {
        shirtsService
            .getOneShirt(shirt_id)
            .then(({ data }) => {
                console.log(data)
                setShirt(data)
            })
            .catch(err => console.error(err))
    }

    const navigate = useNavigate()

    const handleDelete = () => {

        shirtsService
            .deleteShirt(shirt_id)
            .then(() => navigate('/shirts'))
            .catch(err => console.error(err))
    }

    return (

        <Container>

            {
                !shirt ?
                    <Loader />
                    :
                    <>
                        <h1>{shirt.name}</h1>
                        <hr />

                        <Row className="ShirtDetails">

                            <Col md={{ span: 4, offset: 1 }}>
                                <img src={shirt.images} />
                            </Col>

                            <Col md={{ span: 6, offset: 1 }}>
                                <h3>Our shirt</h3>
                                <p>{shirt.description}</p>
                                <ul>
                                    <li>Style: {shirt.style}</li>
                                    <li>Colors: {shirt.colors}</li>
                                    <li>Fabric: {shirt.fabric}</li>
                                    <li>Sizes: {shirt.sizes}</li>
                                </ul>

                                <Link to="/shirts">
                                    <Button variant="outline-secondary" as="div">Back to gallery</Button>
                                </Link>

                                {(user?.role === 'ADMIN') &&
                                    <Link to={`/${shirt_id}/edit`}>
                                        <Button variant="outline-secondary" as="div">Edit</Button>
                                    </Link>
                                }

                                {(user.role === 'ADMIN') &&
                                    <Button variant="danger" as="div" onClick={handleDelete}>Delete</Button>
                                }
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}

export default ShirtDetails
