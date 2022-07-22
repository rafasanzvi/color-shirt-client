import './SignupForm.css'
import { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth.services'

const SignupForm = () => {

    const navigate = useNavigate()
    const [signUpData, setSignUpData] = useState({
        username: '',
        name: '',
        password: '',
        email: ''
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setSignUpData({ ...signUpData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        authService
            .register(signUpData)
            .then(({ data }) => navigate('/'))
            .catch(err => console.log(err))
    }

    const { username, password, email, name } = signUpData

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Register</Button>
            </div>

        </Form>
    )
}

export default SignupForm