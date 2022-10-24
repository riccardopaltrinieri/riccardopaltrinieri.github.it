import {Component} from "react";
import {Row} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projects from "./projects.json";
import "./index.css";

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-10-09 Initial creation.
 */
class ProjectBoard extends Component
{
    render() {
        return <Row className="p-5 justify-content-center mt-3">
            {projects.map((project) => {
                return <ProjectCard project={project} key={project.title}/>
            })}
        </Row>;
    }
}

export {ProjectBoard};