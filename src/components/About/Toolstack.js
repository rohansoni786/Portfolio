import React from "react";
import { Col, Row } from "react-bootstrap";

import vscode from "../../Assets/TechIcons/vscode.svg";
import figma from "../../Assets/TechIcons/figma.svg";
import canva from "../../Assets/TechIcons/canva.svg";
import git from "../../Assets/TechIcons/git.svg";
import github from "../../Assets/TechIcons/github.svg";
import postman from "../../Assets/TechIcons/postman.svg";
import npm from "../../Assets/TechIcons/npm.svg";

function Toolstack() {
  return (
    <Row className="tech-icons-row" style={{ paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vscode} alt="VS Code" className="tech-icon-images" />
        <p>VS Code</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={figma} alt="Figma" className="tech-icon-images" />
        <p>Figma</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={canva} alt="Canva" className="tech-icon-images" />
        <p>Canva</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="Git" className="tech-icon-images" />
        <p>Git</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={github} alt="GitHub" className="tech-icon-images" />
        <p>GitHub</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <p>Postman</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={npm} alt="NPM" className="tech-icon-images" />
        <p>NPM</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
