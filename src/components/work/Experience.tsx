import {Component} from "react";
import {TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import {Accordion, Col, Image, Row} from "react-bootstrap";
import './index.css';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220615 Initial creation.
 */
class Experience extends Component<ExperienceProps> {
    render() {
        let event = this.props.event;
        let connector = event.end ? null : <TimelineConnector/>;

        return <TimelineItem>
            <TimelineOppositeContent>
                <p className="text-secondary">{event.date[0]} - {event.date[1]}</p>
                <p className="text-secondary">{event.location}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <a href={event.website}><Image src={event.logo} style={{ maxWidth: 50}}/></a>
                {connector}
            </TimelineSeparator>
            <TimelineContent className="text-white mb-5" style={{marginTop: -25}}>
                <Accordion flush>
                    <Accordion.Header>
                        <Row>
                            <Col>
                                <h3>{event.title}</h3><h5>{event.role}</h5>
                            </Col>
                        </Row>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul className="list-unstyled">
                            {event.description.map((item) => {return <li>{item}</li>})}
                        </ul>
                    </Accordion.Body>
                </Accordion>
            </TimelineContent>
        </TimelineItem>
    }
}

interface ExperienceProps {
    event: {
        title: string,
        logo: string,
        website: string,
        role: string,
        location: string,
        date: string[],
        description: string[],
        end: boolean,
    }
}

export {Experience};