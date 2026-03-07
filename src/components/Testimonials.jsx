import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "Atlas Studio helped us refactor our monolith into a modular platform. Our team now ships features twice as fast.",
    name: "Jordan Lee",
    role: "VP of Product, Northwind",
  },
  {
    quote:
      "They felt like an extension of our core team—owning roadmap discussions, design decisions, and complex integrations.",
    name: "Priya Sharma",
    role: "Founder, Lumen Health",
  },
  {
    quote:
      "From discovery workshops to the final launch, their process was structured, transparent, and deeply collaborative.",
    name: "Marcus Evans",
    role: "CTO, Kinetic Finance",
  },
];

function Testimonials() {
  return (
    <div>
      <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: "0.16em", fontSize: "0.8rem" }}>
        Stories
      </p>
      <h2 className="section-heading mb-4">Teams that trust Atlas Studio.</h2>
      <Row className="g-4">
        {testimonials.map((item) => (
          <Col md={4} key={item.name}>
            <Card className="glass-card h-100 card-hover">
              <Card.Body>
                <div className="d-flex mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar key={index} className="text-warning me-1" />
                  ))}
                </div>
                <p className="testimonial-quote mb-4 text-muted">{item.quote}</p>
                <div>
                  <h6 className="mb-0">{item.name}</h6>
                  <small className="text-secondary">{item.role}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Testimonials;

