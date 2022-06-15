import { Component } from "react";
import {Image, Row} from "react-bootstrap";
import work_list_picture from "images/company_logos.png";
import {Timeline} from "@mui/lab";
import {Experience} from "./Experience";
import {EnumCompanyName} from "components/common";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220607 Initial creation.
 */
class Work extends Component {
    render() {
        return <div className="work my-5">
            <Row>
                <Image src={work_list_picture} alt="Company logos"/>
            </Row>
            <Timeline position="alternate" className="mt-5 pt-5">
                <Experience companyName={EnumCompanyName.BUNQ}/>
                <Experience companyName={EnumCompanyName.POLITECNICO}/>
                <Experience companyName={EnumCompanyName.SICOM} isEndOfTimeline={true}/>
            </Timeline>;
        </div>;
    }
}

export {Work}