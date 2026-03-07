import React, { useEffect, useState } from "react";
import { Row, Col, Button, Badge, Stack, Image } from "react-bootstrap";
import { FiArrowRight, FiShield, FiZap, FiUsers } from "react-icons/fi";
import heroVisual from "../assets/hero-visual.svg";

function Hero() {
  const [deploys, setDeploys] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    let frame = 0;
    const maxFrames = 80;
    const deployTarget = 1200;
    const uptimeTarget = 99.99;

    const interval = setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / maxFrames, 1);
      setDeploys(Math.round(deployTarget * progress));
      setUptime(parseFloat((uptimeTarget * progress).toFixed(2)));
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Row className="align-items-center g-5">
      <Col lg={6}>
        <div className="mb-3 hero-badge">
          <FiShield className="text-success" />
          Enterprise-grade software, shipped fast
        </div>
        <h1 className="hero-title mb-3">
          Build software that
          <span className="gradient-text d-block">moves your business forward.</span>
        </h1>
        <p className="hero-subtitle mb-4">
          Atlas Studio is a boutique software company helping product teams design, build, and ship
          cloud-native apps that scale from prototype to millions of users.
        </p>
        <Stack direction="horizontal" gap={3} className="mb-4 flex-wrap">
          <Button size="lg" className="btn-gradient rounded-pill px-4" onClick={handleScrollToContact}>
            Book a strategy call <FiArrowRight className="ms-2" />
          </Button>
          <Button
            size="lg"
            variant="outline-light"
            className="btn-outline-soft px-4"
            onClick={handleScrollToFeatures}
          >
            Explore platform
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={3} className="text-muted flex-wrap">
          <Stack direction="horizontal" gap={2}>
            <FiUsers />
            <span>
              Trusted by <strong>digital leaders</strong>
            </span>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <FiZap />
            <span>
              <strong>4x faster</strong> delivery cycles
            </span>
          </Stack>
        </Stack>
      </Col>
      <Col lg={6} className="d-flex justify-content-lg-end">
        <div className="hero-orbit">
          <div className="hero-orbit-blur" />
          <div className="hero-orbit-core d-flex align-items-center justify-content-center">
            <Image
              src={heroVisual}
              alt="Product analytics dashboard preview"
              className="img-fluid"
            />
          </div>
          <div className="position-absolute top-0 start-0 p-3">
            <Badge bg="dark" className="rounded-pill text-uppercase">
              Live observability
            </Badge>
          </div>
          <div className="hero-stats">
            <Stack gap={2}>
              <div className="stat-pill d-flex justify-content-between align-items-center">
                <span>Monthly deployments</span>
                <span className="stat-number">{deploys.toLocaleString()}+</span>
              </div>
              <div className="stat-pill d-flex justify-content-between align-items-center">
                <span>Platform uptime</span>
                <span className="stat-number">{uptime}%</span>
              </div>
            </Stack>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Hero;

