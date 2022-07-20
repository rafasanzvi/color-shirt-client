import { Col, Row } from "react-bootstrap"
import ShirtCard from "../../ShirtCard/ShirtCard"

const ShirtsList = ({ shirtList }) => {

    return (
        <Row>
            {
                shirtList.map(shirt => {
                    return (
                        <Col md={3} key={shirt._id}>
                            <ShirtCard {...shirt} />
                        </Col>
                    );
                })}
        </Row>
    )
}


export default ShirtsList