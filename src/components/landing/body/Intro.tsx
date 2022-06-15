import {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import intro_picture from "images/black_background.png";
import './index.css';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
class Intro extends Component {
    render() {
        return <div
            className="intro-wrapper pt-5 justify-content-center"
            style = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height:"70vh"
            }}
        >
            <Container className="container-xl intro">
                <Row className="align-items-center">
                    <Col className="text-start p-5 intro-text">
                        <h1 style={{ color: "white" }}><b>Riccardo Paltrinieri</b></h1>
                        <p style={{ color: "white" }}><i>
                            I'm an Amsterdam based software engineer, with experience in web-app development,
                            from the backend to the frontend.
                        </i></p>
                    </Col>
                    <Col className="intro-picture align-items-end p-4">
                        <Image src={intro_picture} alt="Intro picture"/>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export {Intro};