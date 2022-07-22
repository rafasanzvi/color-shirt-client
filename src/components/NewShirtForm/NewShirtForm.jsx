import { Form, Button, Row, Col } from "react-bootstrap"
import { useState } from "react"
import shirtService from "../../services/shirt.services"

const NewShirtForm = () => {

    const [shirtData, setShirtData] = useState({
        name: '',
        origin: '',
        style: '',
        colors: '',
        images: '',
        fabric: '',
        sizes: '',
        description: ''
    })

    /* ??????????????????????????????????????? */

    const handleChange = e => {

        const { value, name } = e.target
        setShirtData({ ...shirtData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        shirtService
            .saveShirt(shirtData)
            .then(() => console.log('what?????'))
            .catch(ERR => console.error(ERR))

    }

    const { name, origin, style, colors, images, fabric, sizes, description } = shirtData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Style</Form.Label>
                <Form.Control type="text" value={style} onChange={handleChange} name="style" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Colors</Form.Label>
                        <Form.Control type="text" value={colors} onChange={handleChange} name="colors" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Fabric</Form.Label>
                        <Form.Control type="text" value={fabric} onChange={handleChange} name="fabric" />
                    </Form.Group>
                </Col>
            </Row>

            {/* Origin */}
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" value={origin} onChange={handleChange} name="origin" />
            </Form.Group> */}


            <Form.Select aria-label="Default select example" controlId="formBasicPassword" onChange={handleChange} name="origin">
                <Form.Label>Origin</Form.Label>
                <option value={""}>Select origin</option>
                <option value={"Africa"}>Africa</option>
                <option value={"America"}>America</option>
                <option value={"Europe"}>Europa</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Oceania"}>Oceania</option>
            </Form.Select>


            <Form.Select aria-label="Default select example" controlId="formBasicPassword" onChange={handleChange} name="sizes">
                <Form.Label>Sizes</Form.Label>
                <option value={""}>Select size</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
            </Form.Select>




            {/* Sizes */}
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Sizes</Form.Label>
                <Form.Control type="select" value={sizes} onChange={handleChange} name="sizes" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" value={images} onChange={handleChange} name="images" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
        </Form>

    )

}

export default NewShirtForm