import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FiCode, FiSmartphone, FiCloud, FiFigma } from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Web Platforms",
    description: "Custom web applications tailored to your workflows, from dashboards to customer portals.",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Experiences",
    description: "High-performing mobile apps for iOS and Android built with modern stacks.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud infrastructure on AWS, Azure, or GCP with CI/CD built-in.",
  },
  {
    icon: <FiFigma />,
    title: "Product Design",
    description: "UX strategy, product design systems, and interactive prototypes your team can ship.",
  },
];

function Services() {
  return (
    <div>
      <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: "0.16em", fontSize: "0.8rem" }}>
        Services
      </p>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <h2 className="section-heading mb-0">End-to-end software delivery.</h2>
        <p className="section-subtitle mb-0">
          Partner with a dedicated team that can help you validate ideas, design delightful interfaces, and ship
          production-grade software.
        </p>
      </div>
      <Row className="g-4">
        {services.map((service) => (
          <Col md={6} lg={3} key={service.title}>
            <Card className="glass-card h-100 card-hover">
              <Card.Body>
                <div className="icon-circle mb-3">{service.icon}</div>
                <Card.Title className="mb-2">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;

