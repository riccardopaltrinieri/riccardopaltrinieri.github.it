import { Accordion, Col, Image, Row } from 'react-bootstrap';
import { TimelineEvent } from './Timeline';

type TimelineItemProps = {
    event: TimelineEvent;
    index: number;
    totalEvents: number;
}

const TimeLineItemSecondary = ({event}: { event: TimelineEvent }) => {
    return (
        <div className="mt-2">
            <p className="text-secondary">{event.date[0]} - {event.date[1]}</p>
            <p className="text-secondary">{event.location}</p>
        </div>
    );
}

const TimelineItemMain = ({event, alignment}: {
    event: TimelineEvent,
    alignment: string
}) => {
    return (
        <div className="text-white mb-5">
            <Accordion>
                <Accordion.Header>
                    <Row style={{width: 'inherit', paddingRight: '10px'}}>
                        <Col className={alignment}>
                            <h4>{event.title}</h4>{event.role}
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
        </div>
    );
}

const TimelineSeparator = ({event, shouldHideSeparator}: {
    event: TimelineEvent,
    shouldHideSeparator: boolean
}) => {
    const separator = <div
        style={{
            backgroundColor: "#cacaca",
            width: "2px",
            height: '100%',
            marginLeft: "auto",
            marginRight: "auto"
        }}
    />;

    return (
        <Col style={{maxWidth: "75px", minHeight: "75px"}}>
            <a href={event.website}>
                <Image src={event.logo} style={{maxWidth: "50px", marginTop: "15px"}}/>
            </a>
            {shouldHideSeparator ? null : separator}
        </Col>
    );
}

const TimelineItemMobile = ({isEven, event}: {
    event: TimelineEvent,
    isEven: boolean,
}) => {
    const textAlignment = isEven ? "text-end" : "text-start";

    return (
        <>
            <Row>
                {isEven
                    ? null
                    : <TimelineSeparator event={event} shouldHideSeparator={true}/>}
                <Col className={textAlignment}>
                    <TimeLineItemSecondary event={event}/>
                </Col>
                {isEven
                    ? <TimelineSeparator event={event} shouldHideSeparator={true}/>
                    : null}
            </Row>
            <Row>
                <Col className={textAlignment}>
                    <TimelineItemMain event={event} alignment={textAlignment}/>
                </Col>
            </Row>
        </>
    )
}

const TimelineItemDesktop = ({isEven, event, isLast}: {
    event: TimelineEvent,
    isEven: boolean,
    isLast: boolean,
}) => {
    return <Row>
        <Col className="text-end">
            {isEven
                ? <TimeLineItemSecondary event={event}/>
                : <TimelineItemMain event={event} alignment={'text-end'}/>}
        </Col>
        <TimelineSeparator event={event} shouldHideSeparator={isLast}/>
        <Col className="text-start">
            {isEven
                ? <TimelineItemMain event={event} alignment={'text-start'}/>
                : <TimeLineItemSecondary event={event}/>}
        </Col>
    </Row>;
}

export const TimelineItem = ({event, index, totalEvents}: TimelineItemProps) => {
    const isEven = index % 2 === 0;
    const isLast = index + 1 === totalEvents
    const isMobile = window.innerWidth < 800;

    return isMobile
        ? <TimelineItemMobile event={event} isEven={isEven} />
        : <TimelineItemDesktop event={event} isEven={isEven} isLast={isLast}/>;
}