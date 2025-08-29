import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About
            </h1>
            <p className="home-about-body">
              {/* Hi,👋 I'm <span style={{color: "#1bae58" , fontStyle:"italic"}}>Revati Junghare</span> an aspiring and determined <span style={{color: "#1bae58" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span style={{color: "#1bae58" , fontStyle:"italic"}}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
              <br/>
              <br/>
              An enthusiastic , responsible  and self-motivated ,graduate looking for an entry-level position in web development where I can utilize the extensive knowledge .A problem-solving mindset and ability to perform well in collaboration.always an energetic and eager to learn new skills.I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. */}

Hi, 👋 I’m <span style={{color: "#1bae58", fontStyle:"italic"}}>Revati Junghare</span>, a passionate and driven <span style={{color: "#1bae58", fontStyle:"italic"}}>Full Stack Web Developer</span> with 1.5+ years of hands-on experience. Curious and eager to explore industry-standard tech stacks, I specialize in the <span style={{color: "#1bae58", fontStyle:"italic"}}>MERN stack</span> and seek to grow with an organization that values learning, innovation, and shared success.
<br/>
<br/>
I started my career as a frontend developer intern, where I gained valuable insights into building user-friendly and responsive interfaces. This foundational experience enhanced my attention to detail and deepened my commitment to creating seamless user experiences.
<br/>
<br/>
Currently, as a Dynamic Full Stack Developer at <span style={{color: "#1bae58", fontStyle:"italic"}}>Neurify Technologies Pvt Ltd</span>, I specialize in AI-driven applications, delivering innovative projects using React.js, TypeScript, NestJS, and PostgreSQL. My work has focused on developing scalable solutions and enhancing user engagement through real-time communication. I’m known for my problem-solving mindset, enthusiasm for collaboration, and adaptability to new challenges—qualities that make me a mature and energetic team player, always keen to learn and excel both independently and in team settings.
            </p>
          </Col>
        
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;