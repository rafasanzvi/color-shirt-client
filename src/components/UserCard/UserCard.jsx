import './UserCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const UserCard = ({ images, name, username, email, _id }) => {
    return (
        <Card className="UserCard mb-4">
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr />
                <Card.Text>Username: {username}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Link to={`/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" as="div">Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default UserCard