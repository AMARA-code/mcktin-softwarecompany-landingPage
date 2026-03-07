import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logoAtlas from "../assets/logo-atlas.svg";

function NavbarSection() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar-blur">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("home");
          }}
          className="d-flex align-items-center gap-2"
        >
          <img
            src={logoAtlas}
            alt="Atlas Studio"
            height={32}
            style={{ display: "block" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("services");
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("features");
              }}
            >
              Platform
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("testimonials");
              }}
            >
              Stories
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            size="sm"
            className="btn-gradient rounded-pill px-3"
            onClick={() => handleScrollTo("contact")}
          >
            Book a demo
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;

