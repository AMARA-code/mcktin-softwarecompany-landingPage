import React from "react";
import { Row, Col, Stack, Badge, Image } from "react-bootstrap";
import { FiGlobe, FiClock, FiTarget } from "react-icons/fi";
import logoNorthwind from "../assets/logo-northwind.svg";

function About() {
  return (
    <div>
      <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: "0.16em", fontSize: "0.8rem" }}>
        About
      </p>
      <Row className="g-4">
        <Col lg={6}>
          <h2 className="section-heading mb-3">A senior team that ships like a startup.</h2>
          <p className="section-subtitle mb-4">
            We have helped venture-backed startups and global enterprises launch products used by millions of people
            worldwide. Our team blends product strategy, UX, and engineering to move from idea to production quickly.
          </p>
          <Stack direction="horizontal" gap={3} className="flex-wrap">
            <Stack>
              <span className="h3 mb-0">10+</span>
              <small className="text-muted">years shipping digital products</small>
            </Stack>
            <Stack>
              <span className="h3 mb-0">40+</span>
              <small className="text-muted">products launched</small>
            </Stack>
            <Stack>
              <span className="h3 mb-0">4</span>
              <small className="text-muted">continents served</small>
            </Stack>
          </Stack>
        </Col>
        <Col lg={6}>
          <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-secondary text-uppercase" style={{ letterSpacing: "0.12em", fontSize: "0.75rem" }}>
                How we work
              </span>
              <Badge bg="primary" pill>
                Product-first
              </Badge>
            </div>
            <Stack gap={3} className="mb-4">
              <div className="d-flex gap-3">
                <div className="icon-circle">
                  <FiTarget />
                </div>
                <div>
                  <h5 className="mb-1">Strategic discovery</h5>
                  <p className="mb-0 text-muted">
                    We align with your leadership team on outcomes, success metrics, and constraints before a single
                    line of code is written.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="icon-circle">
                  <FiClock />
                </div>
                <div>
                  <h5 className="mb-1">Weekly release rhythm</h5>
                  <p className="mb-0 text-muted">
                    We ship value every week with clear demos, transparent backlog, and async updates you can share with
                    stakeholders.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="icon-circle">
                  <FiGlobe />
                </div>
                <div>
                  <h5 className="mb-1">Remote-native collaboration</h5>
                  <p className="mb-0 text-muted">
                    We integrate with your tools (Slack, Jira, Notion) and operate comfortably across time zones and
                    distributed teams.
                  </p>
                </div>
              </div>
            </Stack>
            <div>
              <span className="text-secondary text-uppercase d-block mb-2" style={{ letterSpacing: "0.12em", fontSize: "0.75rem" }}>
                Selected partners
              </span>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <Image
                  src={logoNorthwind}
                  alt="Northwind"
                  height={24}
                  className="opacity-75"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;

