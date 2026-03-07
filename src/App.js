import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarSection from "./components/NavbarSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="app-shell">
      <NavbarSection />
      <main>
        <section id="home" className="hero-section">
          <Container>
            <Hero />
          </Container>
        </section>

        <section id="services" className="section-padding bg-soft">
          <Container>
            <Services />
          </Container>
        </section>

        <section id="features" className="section-padding">
          <Container>
            <Features />
          </Container>
        </section>

        <section id="about" className="section-padding bg-soft">
          <Container>
            <About />
          </Container>
        </section>

        <section id="testimonials" className="section-padding">
          <Container>
            <Testimonials />
          </Container>
        </section>

        <section id="contact" className="section-padding bg-soft">
          <Container>
            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;

