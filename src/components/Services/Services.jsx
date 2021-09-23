import React, {useEffect, useState} from "react";
import Innovation from "../../assets/images/innovation.png";
import "./Services.scss";
import {Container} from "react-bootstrap";

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

function ServiceCard(props) {
    return (
        <div className="service__item">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

function Services() {
    let [items, setItem] = useState([]);

    useEffect(() => {
        setItem(() => [...services]);
    }, [items]);

    return (
        <Container className="pt-5 pb-5" id="services">
            <div className="services__title">
                <h1>SERVICE<span>S</span></h1>
            </div>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-between">
                <img className="me-md-5" src={Innovation} alt="services"/>
                <div>
                    {items && items.map((service, key) => (
                        <ServiceCard key={key} title={service.title} content={service.content}/>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Services;