import React from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import { FiActivity, FiLayers, FiLock, FiTrendingUp } from "react-icons/fi";

function Features() {
  return (
    <div>
      <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: "0.16em", fontSize: "0.8rem" }}>
        Platform
      </p>
      <Row className="g-4 align-items-center">
        <Col lg={6}>
          <h2 className="section-heading mb-3">A platform engineered for modern product teams.</h2>
          <p className="section-subtitle mb-4">
            From ideation to launch, our platform give
             you observability, rollout controls, and a flexible design
            system, so your team can ship confidently every week.
          </p>
          <ListGroup variant="flush" className="glass-card">
            <ListGroup.Item className="bg-transparent text-light border-0 border-bottom border-secondary">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle">
                  <FiActivity />
                </div>
                <div>
                  <h5 className="mb-1">Live product analytics</h5>
                  <p className="mb-0 text-muted">
                    Measure adoption, retention, and conversion in real-time so you can prioritize the right roadmap
                    bets.
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-light border-0 border-bottom border-secondary">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle">
                  <FiLayers />
                </div>
                <div>
                  <h5 className="mb-1">Component design system</h5>
                  <p className="mb-0 text-muted">
                    A shared design language across web and mobile so your experience feels cohesive everywhere.
                  </p>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-light border-0">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle">
                  <FiLock />
                </div>
                <div>
                  <h5 className="mb-1">Enterprise-grade security</h5>
                  <p className="mb-0 text-muted">
                    SOC2-ready patterns, SSO, and least-privilege access baked into every project by default.
                  </p>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={5} className="offset-lg-1">
          <div className="glass-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-secondary text-uppercase" style={{ letterSpacing: "0.12em", fontSize: "0.75rem" }}>
                Snapshot
              </span>
              <Badge bg="success" pill>
                In production
              </Badge>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Release velocity</span>
                <span className="fw-semibold text-success">4.2x</span>
              </div>
              <div className="progress bg-dark" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "84%" }}
                  aria-valuenow={84}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Incidents reduced</span>
                <span className="fw-semibold text-info">63%</span>
              </div>
              <div className="progress bg-dark" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "63%" }}
                  aria-valuenow={63}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 text-muted">
              <FiTrendingUp />
              <small>
                Teams using Atlas Studio ship meaningful features every <strong>7 days</strong> on average.
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Features;

