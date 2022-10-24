import {ChangeEvent, Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {send} from "emailjs-com";
import env from "react-dotenv";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-10-24 Initial creation.
 */
class ContactForm extends Component<ContactFormState> {
    state = {
        from_name: "",
        to_name: "Riccardo Paltrinieri",
        message: "",
        reply_to: "",
    }

    render() {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            this.setState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }));
        };

        const flushFormData = () => {
            this.setState((prevState) => ({
                ...prevState,
                from_name: "",
                to_name: "Riccardo Paltrinieri",
                message: "",
                reply_to: "",
            }));
        }

        const onSubmit = (e) => {
            e.preventDefault();
            send(
                "service_tz5kfpb",
                "template_m1ev7fp",
                this.state,
                "xvMzro22lLLLA1L4G",
            )
                .then(flushFormData)
                .catch((err) => {
                    console.log('FAILED... ', err);
                });
        };

        return <Container className="container-xl text-white text-start p-5">
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"/>
            <h1 className="text-white my-3">Feel free to contact me</h1>
            <Form onSubmit={onSubmit} className="form-control-lg p-5">
                <Form.Group>
                    <Row>
                        <Col className="col-2 col-form-label-lg">
                            <Form.Label className="text-white">Name:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                size="lg"
                                type="text"
                                name="from_name"
                                placeholder="Johnny Doe"
                                value={this.state.from_name}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-2 col-form-label-lg">
                            <Form.Label className="text-white">Email:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                size="lg"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                name='reply_to'
                                value={this.state.reply_to}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-2 col-form-label-lg">
                            <Form.Label className="text-white">Message:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                size="lg"
                                as="textarea"
                                rows={8}
                                name='message'
                                placeholder="I want to offer you a new amazing job, let's meet!"
                                value={this.state.message}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <div className="d-grid gap-2 mt-5">
                        <Button variant="outline-light" size="lg" type="submit">Send</Button>
                    </div>
                </Form.Group>
            </Form>
        </Container>;
    }
}

interface ContactFormState {
    from_name: string,
    to_name: string,
    message: string,
    reply_to: string,
}

export {ContactForm};