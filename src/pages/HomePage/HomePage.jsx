import { Link } from 'react-router-dom'
import { Container, Button, Row, Col } from "react-bootstrap"
import Subscription from '../../components/Subscription/Subscription'


const HomePage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Policroma</h1>
                    <hr />
                    <p>The best way to start the month</p>
                    <Link to="/shirts">
                        <Button variant="outline-secondary" as="div">Back to gallery</Button>
                    </Link>
                    <Link to="#">
                        <Button variant="outline-secondary" as="div">Suscription</Button>
                    </Link>
                    <Subscription />
                </Col>
            </Row>
        </Container>

    )

}

export default HomePage