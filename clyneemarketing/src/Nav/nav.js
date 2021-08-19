import { Nav, Navbar, Row, Col } from 'react-bootstrap'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
        {/* <div className="Nav__container_top"></div> */}
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to={"/"}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/team"}>Team</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/partners"}>Partners</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}