import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate developer with strong expertise in
              <b className="purple"> Web Development, Mobile App Development, </b>
              and <b className="purple"> UI/UX Design</b>. I work across both frontend
              and backend technologies and enjoy creating clean, intuitive, and
              high-performance digital products.
              <br />
              <br />
              My technical skills include
              <b className="purple">
                {" "}C, Java, Java Swing, HTML, CSS, XML, JavaScript, TypeScript,
                React.js, Node.js, Express.js, MongoDB (MERN Stack)
              </b>
              , along with proficiency in
              <b className="purple"> Microsoft Office tools, Canva, </b>
              and modern <b className="purple">UI/UX design practices</b>.
              <br />
              <br />
              I focus on building scalable applications, visually appealing
              interfaces, and seamless user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
