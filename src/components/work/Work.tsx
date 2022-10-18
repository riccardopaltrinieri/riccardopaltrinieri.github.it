import { Component } from "react";
import {Timeline} from "@mui/lab";
import {Experience} from "./Experience";
import './index.css';
import events from "./events.json";
import {Col, Row} from "react-bootstrap";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220607 Initial creation.
 */
class Work extends Component
{
    getPosition() {
        return window.innerWidth < 800 ? "right" : "alternate";
    }

    render() {
        return <Row className="work text-white mt-5">
            <h1 className="my-5">My journey</h1>
            <Col className="pt-5">
                <Timeline position={this.getPosition()}>
                    {events.map((event) => {
                        return <Experience event={event} key={event.title}/>
                    })}
                </Timeline>
            </Col>
        </Row>;
    }
}

export {Work}