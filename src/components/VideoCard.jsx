import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/previewcard.css";

const VideoCard = ({ videos }) => {
  return (
    <Row className="gx-3 gy-4 justify-content-center justify-content-md-start">
      {videos.map((video) => (
        <Col xs={12} sm={6} md={4} lg={3} key={video.id}>
          <NavLink
            to={`/videos/${video.id}`}
            className="text-decoration-none card-nav">
            <Card className="small">
              <Card.Img variant="top" src={video.image} alt={video.name} />
              <div class="position-relative">
                <Card.Body>
                  <Card.Title>{video.name}</Card.Title>
                  <span class="position-absolute top-0 end-0 translate-middle p-2 bg-secondary border border-light rounded-2 fw-bold text-white">
                    {video.duration}
                  </span>
                </Card.Body>
              </div>
            </Card>
          </NavLink>
        </Col>
      ))}
    </Row>
  );
};

export default VideoCard;
