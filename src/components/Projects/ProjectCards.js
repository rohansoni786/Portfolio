import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Website demo button only */}
        {props.type === "website" && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {/* UI/UX prototype button only */}
        {props.type === "ui" && props.prototypeLink && (
          <Button variant="primary" href={props.prototypeLink} target="_blank">
            <CgWebsite /> &nbsp; View Prototype
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
