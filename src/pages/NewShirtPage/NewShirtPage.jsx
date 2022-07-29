import { Container, Row, Col } from "react-bootstrap"
import NewShirtForm from "../../components/NewShirtForm/NewShirtForm";
import './NewShirtPage.css'

const NewShirtPage = () => {


    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Create a new shirt</h1>
                    <hr />

                    <NewShirtForm />

                </Col>

            </Row>

        </Container>
    );
}

export default NewShirtPage