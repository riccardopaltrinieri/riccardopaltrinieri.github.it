import {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
class NavBar extends Component<NavBarProps> {
    render() {
        return <div className="nav-bar">
            <Navbar bg="black" variant="dark" expand="lg" className="py-2 fs-5">
                <Container>
                    <Navbar.Brand href="/"><h1 className="fs-3">Portfolio</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" role="tablist">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/work">Work</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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
