import {Component} from "react";
import {Col, Image, Row} from "react-bootstrap";
import work_list_picture from "images/company_logos.png";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220607 Initial creation.
 */
class Work extends Component {
    render() {
        return <div className="work mt-5">
            <Row>
                <Image src={work_list_picture} alt="Company logos"/>
            </Row>
        </div>;
    }
}

export {Work}