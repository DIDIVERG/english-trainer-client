import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import './styles/header.css';
import {FaBars, FaDoorOpen, FaInfoCircle, FaTimes} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <div className="nav-wrapper d-flex flex-column">
            <Navbar bg="dark" expand="lg" className="navbar-dark navbar-light">
                <Navbar.Brand href="#">English Trainer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler-custom">
                    {showOffcanvas ? <FaTimes onClick={handleClose} /> : <FaBars onClick={handleShow} />}
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <NavLink exact to="/dictionary" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Dictionary
                        </NavLink>
                        <NavLink to="/trainers" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Trainers
                        </NavLink>
                        <NavLink to="/videos" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Videos
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="bg-dark offcanvas offcanvas-width">
                <Offcanvas.Header className="d-flex justify-content-between align-items-center">
                    <span>Menu</span>
                    <FaTimes onClick={handleClose} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <NavLink exact to="/dictionary" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Dictionary
                        </NavLink>
                        <NavLink to="/trainers" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Trainers
                        </NavLink>
                        <NavLink to="/videos" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Videos
                        </NavLink>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Header;
