import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import { MessageContext } from '../../context/userMessage.context'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)

    const logout = () => {
        setShowMessage({ show: true, title: 'See you!', text: 'You have been successfully logged out' })
        logoutUser()
    }

    return (
        <Navbar bg="light" expand="md" className='mb-5' /* fixed="top"  */>
            <Container>

                <Link to="/">
                    <Navbar.Brand>Policroma</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>

                        <Link to="/aboutUs">
                            <Nav.Link as="span">About us</Nav.Link>
                        </Link>


                        <NavDropdown title="Shirts" id="basic-nav-dropdown">
                            <Link to="/shirts">
                                <Nav.Link as="span">Gallery</Nav.Link>
                            </Link>
                            <Link to="/create">
                                <Nav.Link as="span">New shirt</Nav.Link>
                            </Link>
                        </NavDropdown>

                        <NavDropdown title="Users" id="basic-nav-dropdown">
                            <Link to="/users">
                                <Nav.Link as="span">User List</Nav.Link>
                            </Link>
                        </NavDropdown>


                        {
                            !user
                                ?
                                <>
                                    <Link to="/register">
                                        <Nav.Link as="span">Register</Nav.Link>
                                    </Link>
                                    <Link to="/login">
                                        <Nav.Link as="span">Login</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/myProfile">
                                        <Nav.Link as="span">My profile of {user.username}</Nav.Link>
                                    </Link>
                                    <Link to="/login">
                                        <Nav.Link as="span" onClick={logout}>Close session</Nav.Link>
                                    </Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;