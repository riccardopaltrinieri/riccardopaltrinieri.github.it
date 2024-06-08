import { Row } from "react-bootstrap";
import projects from "./projects.json";
import "./index.css";
import { ProjectCard } from './ProjectCard';

/**
 * @author Riccardo Paltrinieri <riccardo@paltrinieri.it>
 * @since 2022-10-09 Initial creation.
 */
export const ProjectBoard = () => {
    return <Row className="p-5 justify-content-center mt-3">
        {projects.map((project) => {
            return <ProjectCard project={project} key={project.title}/>
        })}
    </Row>;
}
