import { Col, Row } from "react-bootstrap";
import { InstagramEmbed } from "react-social-media-embed";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 20221018 Initial creation
 */
export const AboutSocial = () => {
    let allInstagramLinks = [
        "https://www.instagram.com/p/CjQNZ1volwB/",
        "https://www.instagram.com/p/ChEmqxjIWBy/",
        "https://www.instagram.com/p/CX_58iTI8OW/",
        "https://www.instagram.com/p/B4SFy2Ynav2/",
        "https://www.instagram.com/p/CTKPmimIDF3/",
        "https://www.instagram.com/p/ByQgj12HNQP/"
    ];

    return <Row className="justify-content-center">
        <h1 className="my-5">Something from my instagram</h1>
        {allInstagramLinks.map((link) => {
            return <Col className="p-3" key={link} style={{minWidth: 378}}>
                <InstagramEmbed url={link}/>
            </Col>
        })}
    </Row>;
}
