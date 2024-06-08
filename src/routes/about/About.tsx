import { Container } from "react-bootstrap";
import "./index.css";
import { AboutBody } from "./AboutBody";
import { Work } from '../work/Work';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 20221018 Initial creation
 */
export const About = () => {
    return <Container className="container-xl text-white text-start p-5">
        <AboutBody/>
        <hr className="bg-white my-5"/>
        <Work/>
    </Container>;
}
