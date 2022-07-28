import { Col, Row } from "react-bootstrap"
import ShirtCard from "../../ShirtCard/ShirtCard"

const ShirtsList = ({ shirtList, favShirts, loadfavshirts }) => {

    return (
        <Row>
            {
                shirtList.map(shirt => {
                    return (
                        <Col md={3} key={shirt._id}>
                            <ShirtCard {...shirt} favShirt={favShirts.some(elm => elm._id === shirt._id)} loadfavshirts={loadfavshirts} />
                        </Col>
                    );
                })}
        </Row>
    )
}


export default ShirtsList