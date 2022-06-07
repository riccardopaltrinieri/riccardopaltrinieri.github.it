import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220606 Initial creation.
 */
class Intro extends Component {
    render() {
        return <div className="intro">
            <Container className="container-xl intro">
                <Row className="align-items-center">
                    <Col className="text-start mb-5 pb-5 ps-4" xs={4}>
                        <h1 style={{ color: "white" }}><b>Hi There!</b></h1>
                        <h2 style={{ color: "white" }}>I'm <b>Riccardo Paltrinieri</b> and I'm a software engineer</h2>
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <div className="bg-image">
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export {Intro};