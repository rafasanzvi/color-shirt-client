import './ShirtCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import shirtsService from '../../services/user.services'
import { MessageContext } from '../../context/userMessage.context'
import { useContext } from "react"
import { useState } from 'react'
import { useEffect } from 'react'


const ShirtCard = ({ images, name, _id, favShirt, loadfavshirts, description }) => {

    const [localFav, setLocalFav] = useState(favShirt)
    const { setShowMessage } = useContext(MessageContext)

    useEffect(() => {
        setLocalFav(favShirt)
    }, [favShirt])

    const addFavShirt = shirt_id => {
        shirtsService
            .addToFavorites(shirt_id)
            .then(() => {
                setLocalFav(true)
                loadfavshirts()
                setShowMessage({ show: true, title: 'Added to favorites :)', text: 'Now this shirt is in your profile' })
            })
            .catch(err => console.error(err))
    }

    const removeFavShirt = shirt_id => {
        shirtsService
            .removeToFavorites(shirt_id)
            .then(() => {
                setLocalFav(false)
                loadfavshirts()
                setShowMessage({ show: true, title: 'Remove from favorites :)', text: 'This shirt was deleted from your profile' })
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
                    {description}
                </Card.Text>

                <Link to={`/details/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" as="div">Details</Button>
                    </div>
                </Link>

                {localFav &&
                    < div className="d-grid gap-2"  >
                        <Button variant="outline-secondary" as="div" onClick={() => removeFavShirt(_id)}>Remove fav</Button>
                    </div>
                }

                {!localFav &&
                    <div className="d-grid gap-2" >
                        <Button variant="outline-secondary" as="div" onClick={() => addFavShirt(_id)} >Add fav</Button>
                    </div>
                }

            </Card.Body>
        </Card >
    )

}

export default ShirtCard