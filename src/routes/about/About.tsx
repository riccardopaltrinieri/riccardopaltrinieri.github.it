import { Container, Row } from "react-bootstrap";
import { AboutBody } from "./AboutBody";
import { Timeline } from '../../components/timeline/Timeline';
import { isMobile } from 'react-device-detect';

import events from './events.json';
import "./index.css";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 20221018 Initial creation
 */
export const About = () => {
    const workExperience = (
        <Row className="text-white text-start">
            <h1 className="mb-5">My journey</h1>
            <Timeline events={events} />
        </Row>
    );

    if (isMobile) {
        return <Container className="container-xl text-white p-5">
            {workExperience}
            <hr className="bg-white my-5"/>
            <AboutBody/>
        </Container>
    } else {
        return <Container className="container-xl text-white p-5">
            <AboutBody/>
            <hr className="bg-white my-5"/>
            {workExperience}
        </Container>
    }
}
