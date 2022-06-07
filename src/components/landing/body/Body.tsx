import {Component} from "react";
import {Container} from "react-bootstrap";
import {Intro} from "./Intro";
import {Work} from "./Work";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri>
 * @since 20220607 Initial creation.
 */
class Body extends Component {
    render() {
        return (
            <div>
                <Container className="container-fluid">
                    <Intro />
                    <Work />
                    {/*<Education />*/}
                    {/*<Skills />*/}
                    {/*<Projects />*/}
                    {/*<Contact />*/}
                </Container>
            </div>
        );
    }
}

export {Body}