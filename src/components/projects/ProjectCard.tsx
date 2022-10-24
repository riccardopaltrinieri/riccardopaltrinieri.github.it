import {Component} from "react";
import {Card, ListGroup} from "react-bootstrap";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-10-09 Initial creation.
 */
class ProjectCard extends Component<ProjectProps>
{
    render() {
        let project = this.props.project;

        function getWebsite() {
            return project.websites["website"] != null
                ? <Card.Link href={project.websites["website"]}><button className="btn-dark">Website</button></Card.Link>
                : null;
        }
        function getGithub() {
            return project.websites["github"] != null
                ? <Card.Link href={project.websites["github"]}><button className="btn-dark">Github</button></Card.Link>
                : null;
        }

        return <Card style={{width: '18rem'}} className="m-3 bg-dark text-white">
            <Card.Img variant="top" src={project.logo} className="project-img mt-3"/>
            <Card.Body>
                <Card.Title><h3><b>{project.title}</b></h3></Card.Title>
                <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="bg-dark text-white">{project.date}</ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">{project.languages}</ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">{project.frameworks}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {getWebsite()}
                {getGithub()}
            </Card.Body>
        </Card>
    }
}

interface ProjectProps {
    project: {
        title: string,
        logo: string,
        websites: string[],
        date: string,
        description: string[],
        languages: string,
        frameworks: string|null,
    }
}

export {ProjectCard};