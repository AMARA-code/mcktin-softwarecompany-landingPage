import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <span className="text-muted">
              © {new Date().getFullYear()} Atlas Studio. All rights reserved.
            </span>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="social-icon"
            >
              <FiTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <FiGithub />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

