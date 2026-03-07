import React, { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzwoaan";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.company.trim()) {
      nextErrors.company = "Please enter your company.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us a bit about your project.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    const isValid = validate();
    if (!isValid) {
      event.preventDefault();
      return;
    }
    // Let the browser submit the form directly to Formspree.
    setSubmitting(true);
  };

  return (
    <Row className="g-4">
      <Col lg={5}>
        <p className="text-uppercase text-secondary mb-2" style={{ letterSpacing: "0.16em", fontSize: "0.8rem" }}>
          Contact
        </p>
        <h2 className="section-heading mb-3">Tell us about your next release.</h2>
        <p className="section-subtitle mb-4">
          Share a bit about your product and timeline. We will review your goals and follow up with a short game plan
          and recommended engagement model.
        </p>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2 text-muted">
            <FiMail />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amaranaeem453@gmail.com"
              className="text-decoration-none text-muted"
              target="_blank"
              rel="noreferrer"
            >
              amaranaeem453@gmail.com
            </a>
          </div>
          <div className="d-flex align-items-center gap-2 text-muted">
            <FiPhone />
            <a href="tel:+15550123456" className="text-decoration-none text-muted">
              +1 (555) 012-3456
            </a>
          </div>
          <div className="d-flex align-items-center gap-2 text-muted">
            <FiMessageCircle />
            <span>We typically respond in under 24 hours.</span>
          </div>
        </div>
      </Col>
      <Col lg={7}>
        <div className="contact-card p-4">
          {status && (
            <Alert
              variant={status.type}
              onClose={() => setStatus(null)}
              dismissible
              className="mb-3"
            >
              {status.message}
            </Alert>
          )}
          <Form
            name="contact"
            method="POST"
            action={FORMSPREE_ENDPOINT}
            onSubmit={handleSubmit}
            noValidate
          >
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="contact-name">
                  <Form.Label className="text-light">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="contact-email">
                  <Form.Label className="text-light">Work email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="contact-company">
                  <Form.Label className="text-light">Company</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    placeholder="Where do you work?"
                    value={formData.company}
                    onChange={handleChange}
                    isInvalid={!!errors.company}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="contact-message">
                  <Form.Label className="text-light">Project details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Share your goals, current challenges, and timelines."
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={12} className="d-flex justify-content-between align-items-center mt-2">
                <small className="text-muted">
                  By submitting, you agree to be contacted about product updates and services.
                </small>
                <Button
                  type="submit"
                  className="btn-gradient rounded-pill px-4"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send message"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default ContactForm;

