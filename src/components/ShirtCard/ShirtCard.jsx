import './ShirtCard.css'
import { Card, Button } from "react-bootstrap"

const ShirtCard = ({ images, name }) => {
    return (
        <Card className="ShirtCard mb-4">
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Details</Button>
            </Card.Body>
        </Card>
    )

}

export default ShirtCard