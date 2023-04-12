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
                        <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Dictionary
                        </NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Trainers
                        </NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Videos
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavLink to="/login" className="nav-link" activeClassName="active" onClick={handleClose}>
                            <FaInfoCircle></FaInfoCircle>
                        </NavLink>
                        <NavLink to="/logout" className="nav-link" activeClassName="active" onClick={handleClose}>
                            <FaDoorOpen></FaDoorOpen>
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
                        <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Dictionary
                        </NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Trainers
                        </NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Videos
                        </NavLink>
                        <NavLink to="/login" className="nav-link" activeClassName="active" onClick={handleClose}>
                            Log out
                        </NavLink>

                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Header;
