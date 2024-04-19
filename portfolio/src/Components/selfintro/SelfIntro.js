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

Hi,👋 I'm <span style={{color: "#1bae58" , fontStyle:"italic"}}>Revati Junghare</span>, an aspiring and determined <span style={{color: "#1bae58" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments. Skilled in the <span style={{color: "#1bae58" , fontStyle:"italic"}}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
<br/>
<br/>
An enthusiastic, responsible, and self-motivated graduate with 6 months of experience as a frontend developer intern, where I gained valuable insights and hands-on experience in building user-friendly interfaces and implementing responsive designs. Looking for an entry-level position in web development where I can utilize the extensive knowledge gained during my internship. I have a problem-solving mindset and the ability to perform well in collaboration. Always energetic and eager to learn new skills, I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using my own initiative.

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