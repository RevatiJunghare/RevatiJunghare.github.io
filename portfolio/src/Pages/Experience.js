import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="experience">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Experience
            </h1>
            <p className="home-about-body">
              Hi,👋 I'm <span style={{color: "#1bae58" , fontStyle:"italic"}}>Revati Junghare</span> an aspiring and determined <span style={{color: "#1bae58" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              <br/>
              Dynamic Full Stack Developer with proven expertise at <span style={{color: "#1bae58" , fontStyle:"italic"}}>Neurify Technologies Pvt Ltd</span>, specializing in AI-driven applications. Successfully delivered innovative projects using React.js, TypeScript, Nestjs and PostgreSQL for scalable solutions, and enhancing user experiences through real-time communication.
            </p>
          </Col>
        
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Experience;