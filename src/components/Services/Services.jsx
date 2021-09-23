import React from "react";
import {Container} from "react-bootstrap";
import InnovationImg from "../../assets/images/innovation.svg";
import ServiceCard from "../Card/ServiceCard";
import "./Services.scss";

const services = [
    {
        title: "Backend PHP",
        content: "Je développe des applications ou des fonctions sous PHP depuis près de 5 ans je connais bien les frameworks Symfony ou Laravel.",
    },
    {
        title: "Frontend ReactJS",
        content: "Besoin d'une application réactive et dynamique ? Je connais bien le framework ReactJS.",
    },
];

const Services = () => {
    return (
        <Container className="pt-5 pb-5" id="services" as="section">
            <div className="services-title">
                <h1>SERVICE<span>S</span></h1>
            </div>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-between">
                <img width={350} height={350} className="me-md-5" src={InnovationImg} alt="services"/>
                <div>
                    {services && services.map((service, key) => (
                        <ServiceCard key={key} title={service.title} content={service.content}/>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Services;