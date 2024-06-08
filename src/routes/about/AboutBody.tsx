import { Col, Row } from "react-bootstrap";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 20221018 Initial creation
 */
export const AboutBody = () => {
    return <Row>
        <Col className="text-start">
            <h1 className="mb-5">Something about me</h1>
            <p className="home-about-body">
                I'm a highly motivated, curious, and challenge-driven <b><i>Software Engineer </i></b>
                with a strong passion for the technology world.<br/>
                <br/>
                Thanks to my degree in <b>Engineering of Computing System</b>, I have familiarity with any IT facet,
                from the low-level computer architecture to internet and networks, sided by all the algorithms and
                logical aspects of Computer Science.<br/>
                <br/>
                Between university and work, I coded mostly with <b>PHP, Java, javascript</b>. In my free time I also
                experimented with <b>GO, React, python</b>.<br/>
                <br/>
                But I'm not only a <del>geek</del> tech enthusiast, I also love running, reading, snowboarding and
                traveling.<br/>
                I always try to develop myself and learn new skills.<br/>
                I never say no to new activities, whether a museum or a club, skydiving or a board game night.<br/>
            </p>
        </Col>
    </Row>;
}

