import { Container, Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Stripe from "../../components/Stripe/Stripe"
import usersService from "../../services/user.services"
import { useState } from 'react'
import './HomePage.css'


const HomePage = () => {

    const [suscriptionModal, setSuscriptionModal] = useState(false)

    const subscription = () => {

        usersService
            .addToSubscribed()
            .then(() => {
                setSuscriptionModal(true)
            })
            .catch(err => console.error(err))
    }


    return (
        <>
            <Container className="index-container">
                <Row>
                    <Col md={{ span: 6, offset: 6 }}>
                        <h1 id="title">Policroma</h1>
                        <h3 id="claim">Starts each month in a different way</h3>
                        <Link to="/shirts" className="home-link">
                            <Button variant="outline-secondary" as="div">Go to shirt gallery</Button>
                        </Link>
                        <Button variant="outline-secondary" as="div" onClick={() => subscription()} className="home-link">Subscription</Button>
                    </Col>
                </Row>
            </Container>

            {suscriptionModal && <Stripe setSuscriptionModal={setSuscriptionModal} />}
        </>
    )

}

export default HomePage