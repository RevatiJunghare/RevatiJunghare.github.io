import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import { Bot, MessageSquare, Building2, Globe, Cloud, Zap } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Neuribot",
      subtitle: "AI Powered Custom Chatbot",
      icon: Bot,
      features: [
        "Neuribot responds intelligently using the data/files uploaded by clients",
        "Clients can train the bot with their own data (making responses highly relevant and contextual)",
        "Clients can personalize every aspect of the chatbot widget",
        "Multiple template designs available to choose from Customize text, colors, queries, and responses",
        "Clients can upload company documents like brochures, PDFs, images, etc.",
        "After publishing a widget (bot), system generates a chat link that users can embed in their website",
        "The bot provides precise and accurate responses to end users"
      ],
      gradient: "linear-gradient(135deg, #9333ea 0%, #2563eb 100%)",
      color: "#9333ea"
    },
    {
      id: 2,
      title: "Neugotio",
      subtitle: "AI Powered Chat Platform",
      icon: MessageSquare,
      features: [
        "Users can personify different client chatbots (CLIs)",
        "Admin can upload images and PDFs via Admin Panel",
        "The bot can fetch real-time results from all conversations",
        "Users can bookmark and share the conversation",
        "Uses AWS S3 for secure and scalable file storage",
        "Supports handling of uploaded images, PDFs, and other documents"
      ],
      gradient: "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
      color: "#059669"
    },
    {
      id: 3,
      title: "Anugraha Project",
      subtitle: "Project Management System",
      icon: Building2,
      features: [
        "Develop Frontend, Admin Panel, and Backend",
        "Using Admin Panel, admin can upload information of their projects (images and content)",
        "Edit the information of already uploaded projects"
      ],
      gradient: "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
      color: "#ea580c"
    },
    {
      id: 4,
      title: "Anywarelabs Website",
      subtitle: "Company Website",
      icon: Globe,
      features: [
        "Develop all pages in Anywarelabs website(Company Website)"
      ],
      gradient: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
      color: "#2563eb"
    },
    {
      id: 5,
      title: "Cloudone Website",
      subtitle: "Company Website",
      icon: Cloud,
      features: [
        "Develop all pages in Cloudone website(Company Website)"
      ],
      gradient: "linear-gradient(135deg, #0891b2 0%, #2563eb 100%)",
      color: "#0891b2"
    },
    {
      id: 6,
      title: "Neurify Website",
      subtitle: "Company Website",
      icon: Zap,
      features: [
        "Develop all pages in Neurify website(Company Website)"
      ],
      gradient: "linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)",
      color: "#7c3aed"
    }
  ];

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
      <Container fluid style={{ padding: '80px 24px' }}>
        <Container style={{ maxWidth: '1280px' }}>
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <h2 
              style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '24px',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}
            >
              Recent Work
            </h2>
            <p 
              style={{ 
                fontSize: '1.25rem', 
                color: '#cbd5e1', 
                maxWidth: '768px', 
                margin: '0 auto',
                lineHeight: '1.75'
              }}
            >
              Here are a few projects I've worked at Neurify Technologies.
            </p>
          </div>

          <Row className="g-4">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Col key={project.id} lg={6} className="mb-4">
                  <Card 
                    className="h-100 project-featured-card"
                    style={projectCardStyle}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, hoverStyle);
                      // Add gradient overlay
                      const overlay = e.currentTarget.querySelector('.gradient-overlay');
                      if (overlay) overlay.style.opacity = '0.1';
                      // Animate features
                      const features = e.currentTarget.querySelectorAll('.feature-item');
                      features.forEach((feature, index) => {
                        setTimeout(() => {
                          feature.style.transform = 'translateX(4px)';
                        }, index * 50);
                      });
                      // Animate accent line
                      const accentLine = e.currentTarget.querySelector('.accent-line');
                      if (accentLine) accentLine.style.width = '100%';
                      // Animate shine effect
                      const shine = e.currentTarget.querySelector('.shine-effect');
                      if (shine) shine.style.left = '100%';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                      // Remove gradient overlay
                      const overlay = e.currentTarget.querySelector('.gradient-overlay');
                      if (overlay) overlay.style.opacity = '0';
                      // Reset features
                      const features = e.currentTarget.querySelectorAll('.feature-item');
                      features.forEach((feature) => {
                        feature.style.transform = 'translateX(0)';
                      });
                      // Reset accent line
                      const accentLine = e.currentTarget.querySelector('.accent-line');
                      if (accentLine) accentLine.style.width = '0';
                      // Reset shine effect
                      const shine = e.currentTarget.querySelector('.shine-effect');
                      if (shine) shine.style.left = '-16px';
                    }}
                  >
                    {/* Gradient overlay */}
                    <div 
                      className="gradient-overlay"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: project.gradient,
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Shine effect */}
                    <div 
                      className="shine-effect"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-16px',
                        width: '16px',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        transform: 'skewX(12deg)',
                        transition: 'left 1s ease',
                        pointerEvents: 'none'
                      }}
                    />
                    
                    <Card.Body style={{ padding: '32px', position: 'relative', zIndex: 1 }}>
                      {/* Icon and header */}
                      <div className="d-flex align-items-center mb-4">
                        <div 
                          style={{
                            padding: '12px',
                            borderRadius: '16px',
                            background: project.gradient,
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                            transition: 'box-shadow 0.3s ease'
                          }}
                        >
                          <IconComponent size={32} color="white" />
                        </div>
                        <div style={{ marginLeft: '16px' }}>
                          <h3 
                            style={{ 
                              fontSize: '1.5rem', 
                              fontWeight: 'bold', 
                              color: 'white',
                              marginBottom: '4px',
                              transition: 'color 0.3s ease'
                            }}
                          >
                            {project.title}
                          </h3>
                          <p 
                            style={{ 
                              color: '#94a3b8', 
                              fontWeight: '500',
                              margin: 0
                            }}
                          >
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Features list */}
                      <div>
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="feature-item d-flex align-items-start mb-3"
                            style={{
                              transition: 'transform 0.3s ease',
                              transitionDelay: `${index * 50}ms`
                            }}
                          >
                            <div 
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: project.gradient,
                                marginTop: '8px',
                                marginRight: '16px',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease'
                              }}
                            />
                            <p 
                              style={{ 
                                color: '#cbd5e1', 
                                lineHeight: '1.75',
                                margin: 0,
                                transition: 'color 0.3s ease'
                              }}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bottom accent line */}
                      <div 
                        className="accent-line"
                        style={{
                          marginTop: '32px',
                          height: '4px',
                          width: '0',
                          background: project.gradient,
                          transition: 'width 0.7s ease',
                          borderRadius: '2px'
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>

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