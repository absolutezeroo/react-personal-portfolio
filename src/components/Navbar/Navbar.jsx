import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar as BSNavbar} from "react-bootstrap";
import './Navbar.scss';
import {Link} from "react-scroll";

const links = [
    {
        title: 'Accueil',
        to: 'home-section',
    },
    {
        title: 'Services',
        to: 'services-section',
    },
    {
        title: 'Projets',
        to: 'projects-section',
    }
]

const Navbar = () => {
    let [items, setItem] = useState([]);

    useEffect(() => {
        setItem(() => [...links]);
    }, [items]);

    return (
        <BSNavbar variant="dark" bg="dark" expand="lg">
            <Container fluid={true}>
                <BSNavbar.Toggle aria-controls="nav"/>
                <BSNavbar.Collapse className="justify-content-center" id="nav">
                    <Nav justify={true}>
                        {items && items.map((item, key) => (
                            <Nav.Link duration={800} smooth={true} offset={-50} to={item.to} eventKey={key}
                                      as={Link} key={key}>
                                <div className="nav-link-text">
                                    {item.title}
                                </div>
                            </Nav.Link>
                        ))}
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;
