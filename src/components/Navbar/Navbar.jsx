import React from 'react';
import {Container, Nav, Navbar as BSNavbar} from "react-bootstrap";
import {Link} from "react-scroll";
import './Navbar.scss';

const links = [
    {
        title: 'Accueil',
        to: 'home',
    },
    {
        title: 'Services',
        to: 'services',
    },
    {
        title: 'Projets',
        to: 'projects',
    }
]

const Navbar = () => {
    return (
        <BSNavbar sticky="top" variant="dark" bg="dark" expand="lg">
            <Container fluid={true}>
                <BSNavbar.Toggle label="Ouvrir la barre de navigation" aria-controls="navbar"/>
                <BSNavbar.Collapse className="justify-content-center" id="navbar">
                    <Nav justify={true}>
                        {links && links.map((item, key) => (
                            <Nav.Link duration={800} smooth={true} offset={-50} to={item.to} eventKey={key}
                                      as={Link} key={key}>
                                <div className="nav-link-text" role="button">
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
