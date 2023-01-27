import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMailOpen} from "react-icons/hi"
import "./Contacts.css"


const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/revati-junghare-612346179/",
      style: "shadow-pink-500",
    },

    {
        id:2,
        child :(
            <>
            Github <FaGithub size={25}/>
            </>
        ),
        href : "https://github.com/RevatiJunghare",
        style: "shadow-yellow-500",
    },

    {
      id:3,
      child :(
          <>
          9172539302 <BsTelephone size={25}/>
          </>
      ),
      href : "#",
      style: "shadow-green-500",
  },

  {
    id:4,
    child :(
        <>
        Email ID <HiOutlineMailOpen size={25}/>
        </>
    ),
    href : "jungharerevati804@gmail.com",
    style: "shadow-red-500",
},
  ];

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6 text-xl">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you</p>
        </div>

        <div className="lg:flex flex-row text-xl">
          <div style={{marginLeft:"20px"}}>
          <p>Contact Number - 9172539302</p>
          <p>Email Address - jungharerevati804@gmail.com</p>
          <p>Address - Amravati, Maharashtra</p>
          </div>
        </div>

        {/* <div  style={{display:"flex",marginTop:"70px",marginLeft:"-40px"}}> */}
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-6 text-center py-8 px-12 sm:px-0 ">
            {links.map(({ id, child, href, style, download }) => (
              <button
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-4 px-12 rounded-lg ${style}`}
                style={{marginLeft:"20px"}}>
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer">
                  {child}
                </a>
              </button>
            ))}
          </div>
        </div>

        
      </div>
    // </div>


    // <Container>
    //   <h1 className="contact-address">Contact
    //     <span className="ctn"> Me</span>
    //   </h1>

    //   <p style={{ textAlign: "center",padding:"20px", color:"white" }}>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.</p>

    //   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //     <Col xs={4} md={2} className="tech-icons">
    //         <BsTelephone/>
    //         <br/>
    //         <span>9166370114</span>
    //     </Col>
    //     <Col xs={4} md={2} className="tech-icons">
    //         <HiOutlineMailOpen/>
    //        <br/>
    //         <a style={{textDecoration: 'none',color: 'white'}}  href="mailto:write2pummy@gmail.com">write2pummy@gmail.com</a>
    //     </Col>
    //     <Col xs={4} md={2} className="tech-icons">
    //         <AiFillGithub/>
    //         <br/>
    //         <a style={{textDecoration: 'none',color: 'white'}}  href="https://github.com/pummysh" target="_blank" rel="noopener noreferrer">Github</a>
    //     </Col>
    //     <Col xs={4} md={2} className="tech-icons">
    //         <AiFillLinkedin/>
    //         <br/>
            
    //         <a style={{textDecoration: 'none',color: 'white'}}  href="https://www.linkedin.com/in/pummy-sharma-172514218/"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
    //     </Col>
    //   </Row>

     
    //     </Container>
   




  );
};

export default Contact;
