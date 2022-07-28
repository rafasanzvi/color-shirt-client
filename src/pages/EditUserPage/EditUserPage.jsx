import { Container } from "react-bootstrap"
import EditUserForm from "../../components/EditUserForm/EditUserForm";



const EditUserPage = () => {


    return (

        <Container className="index-container-forms">

            <h1>Edit user</h1>
            <hr />

            <EditUserForm />

        </Container>
    );
}

export default EditUserPage