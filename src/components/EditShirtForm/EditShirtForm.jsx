import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import shirtsService from "../../services/shirt.services"
import { Form, Button, Row, Col } from "react-bootstrap"
import uploadService from "../../services/upload.services"
import './EditShirtForm.css'

const EditShirtForm = () => {

    const { shirt_id } = useParams()

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

    useEffect(() => {

        shirtsService
            .getOneShirt(shirt_id)
            .then(({ data }) => {
                setShirtData({
                    name: data.name,
                    origin: data.origin,
                    style: data.style,
                    colors: data.colors,
                    images: data.images,
                    fabric: data.fabric,
                    sizes: data.sizes,
                    description: data.description
                })
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleChange = e => {
        const { value, name } = e.target
        setShirtData({ ...shirtData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        shirtsService
            .editShirt(shirt_id, shirtData)
            .then(() => navigate('/shirts'))
            .catch(err => console.error(err))
    }

    const { name, origin, style, colors, images, fabric, sizes, description } = shirtData

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


    return (
        <Form onSubmit={handleSubmit} className="index-container-forms">

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

            <Row>
                <Col>
                    <Form.Select aria-label="Default select example" controlId="formBasicPassword" onChange={handleChange} name="origin" value={origin}>
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
                    <Form.Select aria-label="Default select example" controlId="formBasicPassword" onChange={handleChange} name="sizes" value={sizes}>
                        <Form.Label>Sizes</Form.Label>
                        <option value={""}>Select size</option>
                        <option value={"S"}>S</option>
                        <option value={"M"}>M</option>
                        <option value={"L"}>L</option>
                        <option value={"XL"}>XL</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

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

export default EditShirtForm