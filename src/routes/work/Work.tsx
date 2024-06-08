import './index.css';
import events from "./events.json";
import {Col, Row} from "react-bootstrap";
import { Experience } from './Experience';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220607 Initial creation.
 */
export const Work = () => {
    const getPosition = () => {
        return window.innerWidth < 800 ? "right" : "alternate";
    }

    return <Row className="work text-white mt-5">
        <h1 className="my-5">My journey</h1>
        <Col className="pt-5">
            <Timeline position={getPosition()}>
                {events.map((event) => {
                    return <Experience event={event} key={event.title}/>
                })}
            </Timeline>
        </Col>
    </Row>;
}
