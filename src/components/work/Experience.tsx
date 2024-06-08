import { TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Accordion, Col, Image, Row } from "react-bootstrap";
import './index.css';

type ExperienceProps = {
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

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220615 Initial creation.
 */
export const Experience = ({event}: ExperienceProps) => {
    return <TimelineItem>
        <TimelineOppositeContent>
            <p className="text-secondary">{event.date[0]} - {event.date[1]}</p>
            <p className="text-secondary">{event.location}</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <a href={event.website}><Image src={event.logo} style={{maxWidth: 50}}/></a>
            {event.end ? null : <TimelineConnector/>}
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
                        {event.description.map((item) => {
                            return <li key={item}>{item}</li>
                        })}
                    </ul>
                </Accordion.Body>
            </Accordion>
        </TimelineContent>
    </TimelineItem>
}
