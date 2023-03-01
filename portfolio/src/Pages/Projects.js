import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://s01.sgp1.digitaloceanspaces.com/large/816287-41227-atbuqceluy-1473660885.png"
              title="Snapdeal clone"
              description="Snapdeal was one of the largest online marketplaces in India. Snapdeal targets the value e-commerce segment, which Bahl estimated to be three times larger than the branded goods market."
              tech="Tech-Stacks"
              techD="Html | Css | Javascript | React | Redux | Chakra UI "
              link="https://darling-mooncake-57603b.netlify.app/"
              a="https://github.com/fahad9988/Fashionista"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://m.media-amazon.com/images/S/aplus-media-library-service-media/400bc479-eb70-46a1-b26f-cbce7ca4d03a.__CR0,0,1464,600_PT0_SX1464_V1___.png"
              title="Boat clone"
              description="boAt is known for its audio focused electronic gadgets like wireless speakers, earbuds, wired and wireless earphones and headphones, home audio equipment's, premium rugged cables and other technological accessories."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | Redux | MongoDB | Express "
              link="https://needy-direction-2456.vercel.app/"
              a="https://github.com/akshaykadu24/needy-direction-2456"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://techstory.in/wp-content/uploads/2021/02/maxresdefault-1.jpg"
              title="Sugar Cosmetics Clone"
              description="SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted towards bold, independent women who refuse to be stereotyped into roles."
              tech="Tech-Stacks"
              techD="Html | Css | Javascript "
              link="https://effortless-sunflower-25458d.netlify.app/"
              a="https://github.com/RevatiJunghare/holistic-slip-8772"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://assets.indiadesire.com/images/Licious%202021%20Offers.jpg"
              title="Licious Clone"
              description="Licious aims to deliver the freshest meat and seafood to its customers' doorsteps. Available in seven Indian cities, it operates a farm-to-fork model and delivers more than 18,000 orders daily. Industries: Food & Beverage"
              tech="Tech-Stacks"
              techD="Html | Css | Javascript | React | Chakra-ui "
              link="https://zesty-sherbet-4c14b4.netlify.app/"
              a="https://github.com/RevatiJunghare/ludicrous-teeth-6192/tree/main/frito"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;