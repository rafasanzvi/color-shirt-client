import { Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import usersService from '../../services/user.services'

const EditUserForm = () => {

    const { user_id } = useParams()

    const navigate = useNavigate()

    const [editUserData, setEditUserData] = useState({
        username: '',
        name: '',
        email: '',
        address: '',
        images: '',
        sizes: ''
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

        usersService
            .editUser(user_id, editUserData)
            .then(() => navigate('/users'))
            .catch(err => console.error(err))
    }

    const { name, username, email, address, images, sizes } = editUserData

    return (
        <Form onSubmit={handleSubmit}>

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
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="images" value={images} onChange={handleChange} />
            </Form.Group>

            <Form.Select aria-label="Default select example" controlId="formBasicPassword" name="sizes" value={sizes} onChange={handleChange}>
                <Form.Label>Sizes</Form.Label>
                <option value={""}>Select size</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
            </Form.Select>

            <div className="d-grid">
                <Button variant="dark" type="submit">Accept</Button>
            </div>

        </Form>
    )
}

export default EditUserForm