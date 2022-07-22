import { Container } from "react-bootstrap"
import NewShirtForm from "../../components/NewShirtForm/NewShirtForm";


const NewShirtPage = () => {


    return (

        <Container>

            <h1>Create a new shirt</h1>
            <hr />

            <NewShirtForm />


        </Container>
    );
}

export default NewShirtPage