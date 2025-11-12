import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="home-about-section container-fluid" id="experience">
      <Container>
        <Row>
        <Col md={12} className="home-about-description">
        <h1 style={{ fontSize: "2.6em", marginBottom: "1rem" }}> Professional Experience</h1>
        </Col>
        </Row>

        {/* Experience Section */}
        <Row style={{ marginTop: "2rem" }}>
          <Col md={12}>
            {/* --- Neurify Technologies --- */}
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ color: "#1bae58" }}>Neurify Technologies Pvt. Ltd., Bengaluru</h3>
              <h5 style={{color:'#FFFFFF'}}>
                <strong>Full Stack Developer</strong> | (3 May 2024 – 31 October 2025)
              </h5>
              <ul style={{ marginTop: "0.5rem",color:"grey" }} >
                <li>
                  Led end-to-end development of multiple company websites and full-stack projects delivering responsive,
                  user-friendly interfaces with robust admin and content management systems.
                </li>
                <li>
                  Designed and built AI-driven solutions, including <strong>Neuribot</strong> (customizable chatbot
                  trained on company documents) and <strong>Neugotio</strong> (scalable AI chat platform with real-time
                  conversations, file uploads, bookmarking, sharing, and AWS S3 integration).
                </li>
                <li>
                  Applied strong expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
                  <strong>React.js</strong>, <strong>Redux</strong>, <strong>Nest.js</strong>,{" "}
                  <strong>PostgreSQL</strong>, <strong>Kafka</strong>, <strong>WebSockets</strong>,{" "}
                  <strong>Docker</strong>, and <strong>Microservices</strong> to architect scalable, secure, and
                  high-performance applications.
                </li>
              </ul>
            </div>

            {/* --- Geta AI Labs --- */}
            <div>
              <h3 style={{ color: "#1bae58" }}>Geta AI Labs Pvt. Ltd., Pune</h3>
              <h5 style={{color:'#FFFFFF'}}>
                <strong>Frontend Developer Intern</strong> | (26 June 2023 – 26 Dec 2023)
              </h5>
              <ul style={{ marginTop: "0.5rem",color:"grey" }}>
                <li>
                  Developed modular front-end features with API integration, implementing responsive UIs and analytics
                  dashboards using <strong>React.js</strong> and <strong>react-grid-layout</strong>.
                </li>
                <li>
                  Collaborated with senior developers and designers to enhance functionality, optimize workflows, and
                  deliver scalable features.
                </li>
                <li>
                  Utilized libraries such as <strong>TanStack Table</strong>, <strong>React Dropzone</strong>,{" "}
                  <strong>React-Grid-Layout</strong>, <strong>ApexCharts</strong>, and <strong>Chart.js</strong>.
                </li>
                <li>
                  <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React.js, Redux, Redux Toolkit.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
