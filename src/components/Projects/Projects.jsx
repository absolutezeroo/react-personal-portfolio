import React from "react";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import {LeftArrow, RightArrow} from "../Arrow/Arrow";
import ProjectCard from "../Card/ProjectCard";
import "./Projects.scss";
import {Container} from "react-bootstrap";

const projects = [];

function Projects() {
    return (
        <Container className="projects__section" id="projects" as="section">
            <div className="projects__title">
                <h1>PROJECT<span>S</span></h1>
            </div>

            <div className="projects__content">
                {projects && projects.length > 0 && (
                    <ScrollMenu
                        wrapperClassName="slider"
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        onWheel={onWheel}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} itemId={project.id} title={project.title}
                                         description={project.description} repo={project.link}
                                         category={project.category} imgLink={project.img}
                            />
                        ))}
                    </ScrollMenu>
                )}
                {projects.length === 0 && (
                    <h6 className="project__notfound">
                        Je n'ai malheureusement encore aucun projet concret à vous présenter.
                    </h6>
                )}
            </div>

        </Container>);
}

export default Projects;


function onWheel(apiObj, ev) {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}