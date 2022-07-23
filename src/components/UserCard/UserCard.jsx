import './UserCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const UserCard = ({ name, _id, username }) => {


    return (
        <Card className="UserCard mb-4">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{username}</Card.Title>
                <hr />
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Link to={`/details/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" as="div">Users details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )

}

export default UserCard