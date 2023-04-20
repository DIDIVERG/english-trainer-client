import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/previewcard.css';

const PreviewCard = ({ trainers }) => {
    return (
        <Row className="gx-3 gy-4 justify-content-center justify-content-md-start">
            {trainers.map((trainer) => (
                <Col  xs={12} sm={6} md={4} lg={3} key={trainer.id}>
                    <NavLink to={`/trainers/${trainer.id}`} className=" nav-link p-0 border-0">
                        <Card className=" small">
                            <Card.Img variant="top" src={trainer.image} alt={trainer.name} />
                            <Card.Body>
                                <Card.Title>{trainer.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </NavLink>
                </Col>
            ))}
        </Row>
    );
};

export default PreviewCard;
