import './ShirtCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import shirtsService from '../../services/user.services'


const ShirtCard = ({ images, name, _id, favShirt, loadfavshirts }) => {

    const addFavShirt = shirt_id => {
        shirtsService
            .addToFavorites(shirt_id)
            .then(() => {
                loadfavshirts()
            })
            .catch(err => console.error(err))
    }

    const removeFavShirt = shirt_id => {
        shirtsService
            .removeToFavorites(shirt_id)
            .then(() => {
                loadfavshirts()
            })
            .catch(err => console.error(err))
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

                {favShirt &&
                    < div className="d-grid gap-2"  >
                        <Button variant="outline-secondary" as="div" onClick={() => removeFavShirt(_id)}>Remove fav</Button>
                    </div>
                }

                {!favShirt &&
                    <div className="d-grid gap-2" >
                        <Button variant="outline-secondary" as="div" onClick={() => addFavShirt(_id)} >Add fav</Button>
                    </div>
                }

            </Card.Body>
        </Card >
    )

}

export default ShirtCard