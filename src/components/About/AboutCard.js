import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohan Kumar </span>
            from <span className="purple">Karachi, Pakistan</span>.
            <br />
            I am currently pursuing my BS in Computer Science from
            <span className="purple"> SZABIST Karachi</span>.
            <br />
            Alongside my studies, I am working remotely on
            <span className="purple"> Fiverr, Upwork, and Freelancer </span>
            as a developer and designer.
            <br />
            <br />
            Apart from coding, here are a few activities I truly enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always strive to learn, grow, and build something meaningful."
          </p>
          <footer className="blockquote-footer">Rohan Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
