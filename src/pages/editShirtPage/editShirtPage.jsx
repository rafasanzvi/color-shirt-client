import { Col, Container, Row } from "react-bootstrap"
import EditShirtForm from "../../components/EditShirtForm/EditShirtForm";
import './editShirtPage.css'


const EditShirtPage = () => {


    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Edit a shirt</h1>
                    <hr />

                    <EditShirtForm />

                </Col>

            </Row>

        </Container>
    );
}

export default EditShirtPage