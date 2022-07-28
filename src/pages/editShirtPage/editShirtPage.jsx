import { Container } from "react-bootstrap"
import EditShirtForm from "../../components/EditShirtForm/EditShirtForm";
import './editShirtPage.css'


const EditShirtPage = () => {


    return (

        <Container className="index-container-forms">

            <h1>Edit a shirt</h1>
            <hr />

            <EditShirtForm />

        </Container>
    );
}

export default EditShirtPage