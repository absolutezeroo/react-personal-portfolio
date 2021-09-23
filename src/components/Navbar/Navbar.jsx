import React from 'react';
import {Container, Nav, Navbar as BSNavbar} from "react-bootstrap";
import './Navbar.scss';

const Navbar = () => {

    const link = [
        {
            title: 'Accueil',
            link: '#home'
        },
        {
            title: 'Services',
            link: '#services'
        },
        {
            title: 'Projets',
            link: '#projects'
        }
    ]

    return (
        <BSNavbar variant="dark" bg="dark" expand="lg">
            <Container fluid={true}>
                <BSNavbar.Toggle aria-controls="nav"/>
                <BSNavbar.Collapse className="justify-content-center" id="nav">
                    <Nav justify={true}>
                        {
                            link && link.map((item) => (
                                <Nav.Link href={item.link}>{item.title}</Nav.Link>
                            ))
                        }
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;
