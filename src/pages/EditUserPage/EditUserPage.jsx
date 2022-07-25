import { Container } from "react-bootstrap"
import EditUserForm from "../../components/EditUserForm/EditUserForm";



const EditUserPage = () => {


    return (

        <Container>

            <h1>Edit user</h1>
            <hr />

            <EditUserForm />

        </Container>
    );
}

export default EditUserPage