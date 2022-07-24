import './UserCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const UserCard = ({ images, name }) => {
    return (
        <Card className="ShirtCard mb-4">
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr />
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}





export default UserCard