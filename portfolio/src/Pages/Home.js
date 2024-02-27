import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../Assets/passport_portfolio.jpg";
import SelfIntro from "../Components/selfintro/SelfIntro"
import TypeWriter from "../Components/typewriter/TypeWriter";
import { BsFillPersonLinesFill } from "react-icons/bs";

import resume from "../Assets/Revati_Junghare_Resume.pdf"


function Home() {
    const links = [
    
        {
          id: 1,
          child : (
            <>
              Resume <BsFillPersonLinesFill size={25} />
            </>
          ),
          href: "/Revati-Junghare-Resume_fp05_371.pdf",
          style: "rounded-br-md",
          download: true,
        },
      ]


  return (
    <section id="home"> 
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 }}>
              <img src={myImg} alt="home pic" className="img-fluid" />
            </Col>
            <Col md={7} className="home-header">
              <h1  className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br"> Revati Junghare</strong>
              </h1>

              <div style={{  textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            
            
          </Row>
        </Container>    
      </Container>
      <SelfIntro/>
      {/* <div>
           <ul style={{marginLeft:"5px"}}>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                download={download}
                className={
                  "flex justify-between items-center w-40 h-10 px-4  bg-blue-900 hover:rounded-md duration-300 hover:ml-[-10px]" +
                  " " +
                  style
                }>
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
           </div> */}


{/* <a href={resume} download>
                  <button
                    className="app__nav-btn"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1q3Qf-UCcIxLiOrchdM-VZZaFS7IOq_iY/view?usp=share_link"
                      );
                    }}
                  >
                    Resume
                  </button>
                </a> */}
     
      
    </section>
  );
}

export default Home;
