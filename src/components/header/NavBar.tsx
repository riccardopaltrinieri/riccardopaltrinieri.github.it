import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './index.css';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
export const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };

    return (
        <Container>
            <Navbar bg="black" variant="dark" expand="lg" className="py-2 fs-5" expanded={expanded}>
                <Navbar.Brand href="/"><h1 className="fs-3">Portfolio</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="basic-navbar-nav" role="tablist">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/projects" onClick={handleLinkClick}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/resume" onClick={handleLinkClick}>Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};
