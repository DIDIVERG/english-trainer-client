import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { NavLink, useLocation } from "react-router-dom";

const StartSlide = ({ trainer }) => {
    const location = useLocation();

    return (

            <Card bg="light">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h1>Нажмите, чтобы начать</h1>

                    <NavLink to={`${location.pathname}/train`} className="nav-link p-0 border-0">
                        <Button variant="success" size="lg">
                            Начать
                        </Button>
                    </NavLink>
                </Card.Body>
            </Card>

    );
};

export default StartSlide;
