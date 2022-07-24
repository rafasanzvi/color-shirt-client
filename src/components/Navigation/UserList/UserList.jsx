import UserCard from "../../UserCard/UserCard"
import { Row, Col } from "react-bootstrap"

const UserList = ({ users }) => {

    return (
        <Row>
            {
                users.map(user => {
                    return (
                        <Col md={3} key={user._id}>
                            <UserCard {...user} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}


export default UserList 