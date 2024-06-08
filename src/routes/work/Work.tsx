import './index.css';
import events from "./events.json";
import {Col, Row} from "react-bootstrap";
import { Timeline } from '../../components/timeline/Timeline';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220607 Initial creation.
 */
export const Work = () => {
    return <Row className="work text-white mt-5">
        <h1 className="mb-5">My journey</h1>
        <Timeline events={events} />
    </Row>;
}
