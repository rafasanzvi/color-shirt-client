import { Form, Button, Row, Col } from "react-bootstrap"
import { useState } from "react"
import shirtsService from "../../services/shirt.services"
import { useNavigate } from "react-router-dom"
import uploadService from "../../services/upload.services"
import './NewShirtForm.css'

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

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        shirtsService
            .saveShirt(shirtData)
            .then(() => navigate('/shirts'))
            .catch(err => console.error(err))

    }

    const [isLoading, setIsLoading] = useState(false)

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadService
            .uploadimage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setShirtData({ ...shirtData, images: data.cloudinary_url })
            })
            .catch(err => console.error(err))

    }


    /* const refreshShirts = () => {

    } */


    /* const openForm = () => setShirtData(true)
    const closeForm = () => setShirtData(false) */


    const { name, origin, style, colors, images, fabric, sizes, description } = shirtData

    return (

        <Form onSubmit={handleSubmit} className="container-new-shirt-form">

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="style">
                <Form.Label>Style</Form.Label>
                <Form.Control type="text" value={style} onChange={handleChange} name="style" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="colors">
                        <Form.Label>Colors</Form.Label>
                        <Form.Control type="text" value={colors} onChange={handleChange} name="colors" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="fabric">
                        <Form.Label>Fabric</Form.Label>
                        <Form.Control type="text" value={fabric} onChange={handleChange} name="fabric" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Select aria-label="Default select example" controlId="origin" onChange={handleChange} name="origin" value={origin}>
                        <Form.Label>Origin</Form.Label>
                        <option value={""}>Select origin</option>
                        <option value={"Africa"}>Africa</option>
                        <option value={"America"}>America</option>
                        <option value={"Europe"}>Europa</option>
                        <option value={"Asia"}>Asia</option>
                        <option value={"Oceania"}>Oceania</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example" controlId="sizes" onChange={handleChange} name="sizes" value={sizes}>
                        <Form.Label>Sizes</Form.Label>
                        <option value={""}>Select size</option>
                        <option value={"S"}>S</option>
                        <option value={"M"}>M</option>
                        <option value={"L"}>L</option>
                        <option value={"XL"}>XL</option>
                    </Form.Select>
                </Col>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleChange} name="description" />
                </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" value={images} onChange={handleChange} name="images" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="images">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="images" />
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
        </Form>

    )

}

export default NewShirtForm