import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({title, content}) => (
    <div className="service-item">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);

export default ServiceCard;