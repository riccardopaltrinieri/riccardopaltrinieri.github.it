import {Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
class Header extends Component
{
    render() {
        return <div className="nav-bar">
            <Navbar bg="black" variant="dark" expand="lg" className="py-2 fs-5">
                <Container>
                    <Navbar.Brand href="#home" className="fs-3">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" role="">
                        <Nav className="me-auto">
                            <NavDropdown title="About" id="basic-nav-dropdown" menuVariant="dark">
                                <NavDropdown.Item href="#work">Work</NavDropdown.Item>
                                <NavDropdown.Item href="#education">Education</NavDropdown.Item>
                                <NavDropdown.Item href="#project">Project</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#something-about-me">Something about me</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link href="#memes">Dank memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </div>;
    }
}

export {Header};
