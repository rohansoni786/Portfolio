import React from "react";
import { Col, Row } from "react-bootstrap";

// Existing icons already in your project
import Cpp from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";

// Newly added icons
import HTML from "../../Assets/TechIcons/HTML.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import Express from "../../Assets/TechIcons/express (2).svg";
import Angular from "../../Assets/TechIcons/Angular.svg";
import SQLite from "../../Assets/TechIcons/SQLite.svg";
import Canva from "../../Assets/TechIcons/canva copy.svg";

function Techstack() {
  return (
    <Row className="tech-icons-row" style={{ paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" className="tech-icon-images" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" className="tech-icon-images" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" className="tech-icon-images" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" className="tech-icon-images" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Angular} alt="Angular" className="tech-icon-images" />
        <div className="tech-icons-text">Angular</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Express} alt="Express.js" className="tech-icon-images" />
        <div className="tech-icons-text">Express.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLite} alt="SQLite" className="tech-icon-images" />
        <div className="tech-icons-text">SQLite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="Material UI" className="tech-icon-images" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Canva} alt="Canva" className="tech-icon-images" />
        <div className="tech-icons-text">Canva</div>
      </Col>
    </Row>
  );
}

export default Techstack;
