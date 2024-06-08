import { Col } from 'react-bootstrap';
import { TimelineItem } from './TimelineItem';

export type TimelineEvent = {
    title: string,
    logo: string,
    website: string,
    role: string,
    location: string,
    date: string[],
    description: string[],
};

type TimelineProps = {
    events: TimelineEvent[]
}

export const Timeline = ({ events }: TimelineProps) => {
    return (
        <Col>
            {events.map((event, i) => (
                <TimelineItem event={event} index={i} totalEvents={events.length} key={i} />
            ))}
        </Col>
    )
}