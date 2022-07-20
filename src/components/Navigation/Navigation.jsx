import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

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

                        <Link to="/myProfile">
                            <Nav.Link as="span">My profile</Nav.Link>
                        </Link>

                        <NavDropdown title="Shirts" id="basic-nav-dropdown">
                            <Link to="/shirts">
                                <Nav.Link as="span">Gallery</Nav.Link>
                            </Link>
                            <Link to="/create">
                                <Nav.Link as="span">New shirt</Nav.Link>
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;