import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { send } from "emailjs-com";
import './index.css';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-10-24 Initial creation.
 */
export const ContactForm = () => {
    const [fromName, setFromName] = useState("");
    const [toName, setToName] = useState("");
    const [message, setMessage] = useState("");
    const [replyTo, setReplyTo] = useState("");

    const flushFormData = () => {
        setFromName("");
        setToName("Riccardo Paltrinieri");
        setMessage("");
        setReplyTo("");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            "service_tz5kfpb",
            "template_m1ev7fp",
            { fromName, toName, message, replyTo },
            "xvMzro22lLLLA1L4G",
        )
            .then(flushFormData)
            .catch((err) => {
                console.log('FAILED... ', err);
            });
    };

    return (
        <Container className="container-xl text-white text-start">
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"/>
            <h1 className="text-white my-5">Feel free to contact me</h1>
            <Form onSubmit={onSubmit} className="form-control-lg">
                <Form.Group className="form-label-on-top">
                    <Row>
                        <Col className="col-12 col-md-2 col-form-label-lg">
                            <Form.Label className="text-white">Name:</Form.Label>
                        </Col>
                        <Col className="col-12 col-md-10">
                            <Form.Control
                                size="lg"
                                type="text"
                                name="from_name"
                                placeholder="Johnny Doe"
                                value={fromName}
                                onChange={(e) => setFromName(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 col-md-2 col-form-label-lg">
                            <Form.Label className="text-white">Email:</Form.Label>
                        </Col>
                        <Col className="col-12 col-md-10">
                            <Form.Control
                                size="lg"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                name='reply_to'
                                value={replyTo}
                                onChange={(e) => setReplyTo(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 col-md-2 col-form-label-lg">
                            <Form.Label className="text-white">Message:</Form.Label>
                        </Col>
                        <Col className="col-12 col-md-10">
                            <Form.Control
                                size="lg"
                                as="textarea"
                                rows={8}
                                name='message'
                                placeholder="I want to offer you a new amazing job, let's meet!"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <div className="d-grid gap-2 mt-5">
                        <Button variant="outline-light" size="lg" type="submit">Send</Button>
                    </div>
                </Form.Group>
            </Form>
        </Container>
    );
};
