import {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './index.css';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-07-07 Initial creation.
 */
class Resume extends Component {
    render() {
        return (
            <Container fluid className="resume-section">
                <Row className="my-3">
                    <a href={"/pdf/cv_riccardo_paltrinieri.pdf"}><Button variant="outline-light">Download</Button></a>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <Document
                            file="/pdf/cv_riccardo_paltrinieri.pdf"
                            alt="CV Riccardo Paltrinieri"
                            error={Resume.getPdfError()}
                        >
                            <Page pageNumber={1}/>
                        </Document>
                    </Col>
                    <Col className="text-center text-white resume-quote">
                        <Row className="fst-italic">
                            <h3> "One of the best developer I've ever met"</h3>
                            <h5>~ Tony Stark</h5>
                        </Row>
                        <Row className="fst-italic pt-5">
                            <h3> "Brilliant, skilled and fun"</h3>
                            <h5>~ Rick Sanchez</h5>
                        </Row>
                        <Row className="mt-3">
                            <a href={"/pdf/cv_riccardo_paltrinieri.pdf"}><Button variant="outline-light">Download</Button></a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

    private static getPdfError() {
        return <div className="text-white">
            Oops! Something went wrong when loading the resume, but you can download it <a href="/pdf/cv_riccardo_paltrinieri.pdf">here</a>
        </div>;
    }
}

export {Resume}