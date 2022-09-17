import {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import intro_picture from "images/avatar_intro.jpg";
import './index.css';
import work_list_picture from "../../../images/company_logos.png";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
class Intro extends Component {
    render() {
        return <div
            className="intro-wrapper mt-5 justify-content-center"
            style = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height:"70vh"
            }}
        >
            <Container className="container-xl intro">
                <Row className="align-items-center">
                    <Col className="align-items-end p-4">
                        <Image src={intro_picture} alt="Intro picture" className="intro-picture"/>
                    </Col>
                    <Col className="text-start p-5 intro-text">
                        <h1 style={{ color: "white" }}><b>Riccardo Paltrinieri</b></h1>
                        <p style={{ color: "white" }}><i>
                            I'm an Amsterdam based software engineer, with experience in web-app development,
                            from the backend to the frontend.
                        </i></p>
                    </Col>
                </Row>
                <Row>
                    <Image src={work_list_picture} alt="Company logos"/>
                </Row>
            </Container>
        </div>;
    }
}

export {Intro};