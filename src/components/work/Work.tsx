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
        return window.innerWidth < 990 ? "right" : "alternate";
    }

    getColumn() {
        return window.innerWidth < 990 ? <Col className="col-6"/> : null;
    }

    render() {
        return <Row className="work">
            <hr className="bg-white mt-5"/>
            <h2 className="text-white mt-5">My journey:</h2>
            <Col>
                <Timeline position={this.getPosition()} className="pt-5">
                    {events.map((event) => {
                        return <Experience event={event}/>
                    })}
                </Timeline>
            </Col>
            {this.getColumn()}
        </Row>;
    }
}

export {Work}