import { Col, Card, Button, Row } from "react-bootstrap"

const ShirtsList = ({ shirtList }) => {

    return (
        <Row>
            {
                shirtList?.map(shirt => {
                    return (

                        <Col md={3}>
                            <Card className="ShirtCard">
                                <Card.Img variant="top" src={shirt.images} />
                                <Card.Body>
                                    <Card.Title>{shirt.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
        </Row>
    )
}


export default ShirtsList