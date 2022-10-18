import {Component} from "react";
import {Container} from "react-bootstrap";
import {Work} from "components";
import "./index.css";
import {AboutBody} from "./AboutBody";
import {AboutSocial} from "./AboutSocial";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 20221018 Initial creation
 */
class About extends Component
{
    render() {
        return <Container className="container-xl text-white text-start p-5">
                <AboutBody />
                <hr className="bg-white my-5"/>
                <Work />
                <hr className="bg-white my-5"/>
                <AboutSocial />
        </Container>;
    }
}

export {About};