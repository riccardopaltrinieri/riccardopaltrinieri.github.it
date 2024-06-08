import { Col, Container, Image, Row } from "react-bootstrap";
import intro_picture from "images/avatar_intro.png";
import './index.css';
import { HomeCaption } from "./HomeCaption";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
export const Home = () => {
    return <div className="intro">
        <Container className="container-xl">
            <Row className="align-items-center">
                <Col className="align-items-end p-4">
                    <Image src={intro_picture} alt="Intro picture" className="intro-picture"/>
                </Col>
                <Col className="text-start p-5 intro-text text-white">
                    <h1><b>Riccardo Paltrinieri</b></h1>
                    <HomeCaption/>
                </Col>
            </Row>
        </Container>
    </div>;
}
