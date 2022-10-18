import {Component} from "react";
import {Container, Row} from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './index.css';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220926 Initial creation.
 */
class Footer extends Component
{
    render() {
        return <Container className="footer container-fluid">
            <hr className="bg-white mt-5"/>
            <Row className="text-muted">
                <div className="footer-body col-md-4">
                    <h5>Designed and Developed by Riccardo Paltrinieri</h5>
                </div>
                <div className="footer-copyright col-md-4">
                    <h5>Copyright © 2022 RP</h5>
                </div>
                <div className="col-md-4 text-center">
                        <a
                            className="footer-icon"
                            href="https://github.com/riccardopaltrinieri"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                        <a
                            className="footer-icon"
                            href="https://www.linkedin.com/in/riccardo-paltrinieri-b26850158/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            className="footer-icon"
                            href="https://www.instagram.com/riccardopaltrinieri/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                </div>
            </Row>
        </Container>;
    }
}

export {Footer};