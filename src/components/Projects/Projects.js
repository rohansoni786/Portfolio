import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your images
import safeherImg from "../../Assets/Projects/safeher.png";
import academiaImg from "../../Assets/Projects/academia.png";
import uiTravelImg from "../../Assets/Projects/ui-travel.png";
import uiCoffeeImg from "../../Assets/Projects/ui-coffee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my website projects and UI/UX prototypes.
        </p>

        {/* Row 1 → Websites */}
        <Row className="justify-content-center mb-4">
          <Col md={6} className="project-card d-flex">
            <ProjectCard
              type="website"
              imgPath={safeherImg}
              title="SAFEHER – A Digital Safe Space for Women"
              description="SAFEHER is a web-based platform created to support and empower women facing abuse, discrimination, and violence. Features include a bilingual interface (Urdu & English), WhatsApp live chat, emergency exit using the ESC key, awareness quizzes, verified resources, real women's success stories, a secure contact form connected with 15+ NGOs, auto-playing awareness video, and a fully accessible responsive design."
              demoLink="https://lnkd.in/epf6UYiD"
            />
          </Col>

          <Col md={6} className="project-card d-flex">
            <ProjectCard
              type="website"
              imgPath={academiaImg}
              title="ACADEMIA — Online Education & Learning"
              description="ACADEMIA is a modern online education website designed with a clean UI and responsive design. It provides course categories, instructor information, online learning features, and more."
              demoLink="https://fluffy-biscotti-746b0e.netlify.app/"
            />
          </Col>
        </Row>

        {/* Row 2 → UI Prototypes */}
        <Row className="justify-content-center">
          <Col md={6} className="project-card d-flex">
            <ProjectCard
              type="ui"
              imgPath={uiTravelImg}
              title="Travel Booking App – UI/UX Prototype"
              description="First UI/UX project in Figma — a Travel Booking App focusing on user-centric design and smooth user flow. Includes flight search, booking flow, and clean visual UI elements designed for beginner-friendly usability."
              prototypeLink="https://www.figma.com/design/cvK7XTHkhgq43M9IZDe5NG/Roha"
            />
          </Col>

          <Col md={6} className="project-card d-flex">
            <ProjectCard
              type="ui"
              imgPath={uiCoffeeImg}
              title="Coffee Ordering App – Interactive Prototype"
              description="Second Figma project — an interactive prototype for a Coffee Ordering App featuring smooth user flow, drink selection, customization options, and motion design micro-interactions to provide engaging system feedback."
              prototypeLink="https://www.figma.com/proto/KphSJp0TRZTlm8SFVRRFsQ?node-id=95-694"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
