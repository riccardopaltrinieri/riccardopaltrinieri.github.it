import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
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
            <Container className="pt-3 container_resume">
                <Row>
                    <Col>
                        <Document
                            file="/pdf/cv_riccardo_paltrinieri.pdf"
                            alt="CV Riccardo Paltrinieri"
                            error={Resume.getPdfError()}
                        >
                            <Page pageNumber={1}/>
                        </Document>
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