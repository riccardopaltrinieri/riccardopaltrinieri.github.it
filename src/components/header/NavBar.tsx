import {Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
class NavBar extends Component<NavBarProps> {
    render() {
        return <div className="nav-bar">
            <Navbar bg="black" variant="dark" expand="lg" className="py-2 fs-5">
                <Container>
                    <Navbar.Brand href="/" className="fs-3">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" role="tablist">
                        <Nav className="me-auto">
                            <NavDropdown title="About" id="basic-nav-dropdown" menuVariant="dark" className="navbar-dropdown">
                                <NavDropdown.Item href="education">Education</NavDropdown.Item>
                                <NavDropdown.Item href="project">Project</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#something-about-me">Something about me</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="work">Work</Nav.Link>
                            <Nav.Link href="resume">Resume</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>;
    }
}

interface NavBarProps {
    handleResumeClick: (shouldShowResume: boolean) => void
}

export {NavBar};
