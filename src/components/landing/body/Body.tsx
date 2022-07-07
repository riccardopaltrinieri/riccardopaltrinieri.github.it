import {Component} from "react";
import {Container} from "react-bootstrap";
import {Intro} from "./Intro";
import {Work} from "./Work";
import {Resume} from "../../resume";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-06-07 Initial creation.
 */
class Body extends Component<BodyProps> {
    render() {
        if (this.props.showResume) {
            return (
                <Resume/>
            );
        } else {
            return (
                <Container className="container-fluid">
                    <Intro/>
                    <Work/>
                    {/*<Education />*/}
                    {/*<Skills />*/}
                    {/*<Projects />*/}
                    {/*<Contact />*/}
                </Container>
            );
        }
    }
}

interface BodyProps {
    showResume: boolean
}

export {Body}