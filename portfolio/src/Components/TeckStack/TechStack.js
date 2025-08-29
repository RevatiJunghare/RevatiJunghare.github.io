import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
  DiHtml5,
} from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <div id="skills">
      <br />
      <br />
      <br />
      <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
        <span className="purple">Skills</span>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          <p>Html5</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
          <p>CSS3</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p>Javascript</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <p>React.js</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
          <p>Redux</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <p>Typescript</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <p>Tailwind</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiBootstrap />
          <p>Bootstrap</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs />
          <p>Nest.js</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
          <p>PostgreSQL</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <FaNodeJs />
          <p>Nodejs</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <p>Express.js</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <p>Mongodb</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiApachekafka />
          <p>Kafka</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <FaDocker />
          <p>Docker</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiGithubBadge />
          <p>Github</p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
