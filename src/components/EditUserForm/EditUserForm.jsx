import { Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import usersService from '../../services/user.services'
import uploadService from '../../services/upload.services'
import './EditUserForm.css'

const EditUserForm = () => {

    const { user_id } = useParams()

    const navigate = useNavigate()

    const [editUserData, setEditUserData] = useState({
        username: '',
        name: '',
        email: '',
        address: '',
        images: '',
        sizes: '',
        dateOfBirth: ''
    })

    useEffect(() => {

        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                setEditUserData({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    address: data.address,
                    images: data.images,
                    sizes: data.sizes,
                    dateOfBirth: data.dateOfBirth
                })
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        const { value, name } = e.target
        setEditUserData({ ...editUserData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()
        console.log(editUserData)
        usersService
            .editUser(user_id, editUserData)
            .then(() => navigate('/users'))
            .catch(err => console.error(err))
    }

    const { name, username, email, address, images, sizes, dateOfBirth } = editUserData

    const [isLoading, setIsLoading] = useState(false)

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadService
            .uploadimage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setEditUserData({ ...editUserData, images: data.cloudinary_url })
            })
            .catch(err => console.error(err))
    }

    return (
        <Form onSubmit={handleSubmit} className="index-container-forms">

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={username} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" value={address} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="images" value={images} onChange={handleChange} />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="images">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="images" />
            </Form.Group>

            <Form.Select aria-label="Default select example" controlId="formBasicPassword" name="clientSize" value={sizes} onChange={handleChange}>
                <Form.Label>Sizes</Form.Label>
                <option value={""}>Select size</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
            </Form.Select>

            <div className="d-grid">
                <Button variant="secondary" type="submit">Accept</Button>
            </div>

        </Form>
    )
}

export default EditUserForm