import React, {useEffect, useState} from "react";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import {LeftArrow, RightArrow} from "../Arrow/Arrow";
import ProjectCard from "../Card/ProjectCard";
import "./Projects.scss";

const projects = [];

function Projects() {
    let [items, setItem] = useState([]);

    useEffect(() => {
        setItem(items => [...items, ...projects]);
    }, []);

    return (<section className="projects-section">
        <div className="projects-title">
            <h1>PROJECT<span>S</span></h1>
        </div>

        <div className="projects-content">
            {items.length > 0 && (
                <ScrollMenu
                    wrapperClassName="slider"
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onWheel={onWheel}>
                    {
                        items.map((project) => {
                            return <ProjectCard
                                key={project.id}
                                itemId={project.id}
                                title={project.title}
                                description={project.description}
                                repo={project.link}
                                category={project.category}
                                imgLink={project.img}
                            />
                        })
                    }
                </ScrollMenu>
            )}
            {items.length === 0 && (
                <h6 className="project-notfound">
                    Je n'ai malheureusement encore aucun projet concret à vous présenter.
                </h6>
            )}
        </div>

    </section>);
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