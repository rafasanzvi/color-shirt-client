import './ShirtCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const ShirtCard = ({ images, name, _id }) => {

    const addFavShirt = () => {
        alert('HACEMPOS ESTA CAMISA FAVORITA')
    }

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
                <Link to={`/details/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" as="div">Details</Button>
                    </div>
                </Link>
                <div className="d-grid gap-2">
                    <Button variant="outline-secondary" as="div" onClick={addFavShirt}>Add to favourite</Button>
                </div>

            </Card.Body>
        </Card>
    )

}

export default ShirtCard