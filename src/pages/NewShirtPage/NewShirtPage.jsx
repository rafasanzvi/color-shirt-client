import { Container } from "react-bootstrap"
import NewShirtForm from "../../components/NewShirtForm/NewShirtForm";
import './NewShirtPage.css'

const NewShirtPage = () => {


    return (

        <Container className="index-container-forms">

            <h1>Create a new shirt</h1>
            <hr />

            <NewShirtForm />


        </Container>
    );
}

export default NewShirtPage