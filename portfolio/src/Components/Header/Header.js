import React, { useState } from "react";
import "./header.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-scroll"
import Button from "react-bootstrap/Button";
import resume from "../../Assets/fp05_371-Revati_Junghare_Resume.pdf"


function Header() {
  
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const  x = window.matchMedia("(max-width:1000px)")

  function handleClick(x) {
    if (x.matches) { // If media query matches
      let a= document.getElementById("tgl");
      a.click();
    } 
  }
  

  return (
    <Navbar
     
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle id="tgl"
          aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto" defaultActiveKey="#home">

          <Nav.Item className="fork-btn">
          <Link to="home">
          <Button onClick={()=>{handleClick(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Home
          </Button>
          </Link>
          </Nav.Item>

           <Nav.Item className="fork-btn">
          <Link to="about">
          <Button onClick={()=>{handleClick(x)}} 
                target="_blank"
                className="fork-btn-inner"
              >
                About
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="skills">
          <Button onClick={()=>{handleClick(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Skills
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="projects">
          <Button onClick={()=>{handleClick(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Projects
          </Button>
          </Link>
          </Nav.Item>

         


          <Nav.Item className="fork-btn">
          <Link to="contact">
          <Button onClick={handleClick}
                target="_blank"
                className="fork-btn-inner"
              >
                Contact
          </Button>
          </Link>
          </Nav.Item>

         

            
            <Nav.Item className="fork-btn">
            <a href={resume} download>
            <Button
               //href="https://drive.google.com/file/d/1q3Qf-UCcIxLiOrchdM-VZZaFS7IOq_iY/view?usp=share_link"
                //target="_blank"
                className="fork-btn-inner"
                onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1TtgcZ8Zyzhe2HEFGwnL-RB-QgCnPbas_/view?usp=share_link"
                    );
                  }}
              >
                Resume
              </Button>
              </a>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;




                  <button
                    className="app__nav-btn"
                    
                  >
                    Resume
                  </button>
              