import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {

  const projectCardStyle = {
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.3)',
    borderRadius: '24px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    position: 'relative'
  };

  const hoverStyle = {
    transform: 'translateY(-8px) scale(1.02)',
    borderColor: 'rgba(148, 163, 184, 0.5)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  };

  return (
    <Container 
      id="projects" 
      fluid 
      className="project-section"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        minHeight: '100vh',
        padding: 0
      }}
    >
      {/* Featured Projects Section */}

      {/* Masai School Projects Section */}
      <Container style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div 
          style={{ 
            borderTop: '1px solid rgba(148, 163, 184, 0.3)', 
            paddingTop: '80px' 
          }}
        >
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <h1 
              className="project-heading"
              style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '24px',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}
            >
              Masai School <strong style={{ color: '#a855f7' }}>Projects</strong>
            </h1>
            <p 
              style={{ 
                color: "white", 
                fontSize: '1.25rem',
                maxWidth: '768px',
                margin: '0 auto',
                lineHeight: '1.75'
              }}
            >
              Here are a few projects I've worked on during my time at Masai School.
            </p>
          </div>
          
          <Row className="justify-content-center g-4" style={{ paddingBottom: "40px" }}>
            <Col md={6} lg={4} className="project-card d-flex justify-content-center">
              <div style={{ width: '100%', maxWidth: '400px' }}>
                <ProjectCards
                  imgPath="https://s01.sgp1.digitaloceanspaces.com/large/816287-41227-atbuqceluy-1473660885.png"
                  title="Snapdeal clone"
                  description="Snapdeal was one of the largest online marketplaces in India. Snapdeal targets the value e-commerce segment, which Bahl estimated to be three times larger than the branded goods market."
                  tech="Tech-Stacks"
                  techD="Html | Css | Javascript | React | Redux | Chakra UI"
                  link="https://fashionista-rct201.netlify.app/"
                  a="https://github.com/fahad9988/Fashionista"
                />
              </div>
            </Col>
            <Col md={6} lg={4} className="project-card d-flex justify-content-center">
              <div style={{ width: '100%', maxWidth: '400px' }}>
                <ProjectCards
                  imgPath="https://m.media-amazon.com/images/S/aplus-media-library-service-media/400bc479-eb70-46a1-b26f-cbce7ca4d03a.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                  title="Boat clone"
                  description="boAt is known for its audio focused electronic gadgets like wireless speakers, earbuds, wired and wireless earphones and headphones, home audio equipment's, premium rugged cables and other technological accessories."
                  tech="Tech-Stacks"
                  techD="Html | Javascript | Css | React | Redux | MongoDB | Express"
                  link="https://musicose.vercel.app/"
                  a="https://github.com/akshaykadu24/Musicose"
                />
              </div>
            </Col>
            <Col md={6} lg={4} className="project-card d-flex justify-content-center">
              <div style={{ width: '100%', maxWidth: '400px' }}>
                <ProjectCards
                  imgPath="https://techstory.in/wp-content/uploads/2021/02/maxresdefault-1.jpg"
                  title="Sugar Cosmetics Clone"
                  description="SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted towards bold, independent women who refuse to be stereotyped into roles."
                  tech="Tech-Stacks"
                  techD="Html | Css | Javascript"
                  link="https://effortless-sunflower-25458d.netlify.app/"
                  a="https://github.com/RevatiJunghare/holistic-slip-8772"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;