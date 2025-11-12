import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import "./projectcards.css"

function ProjectCards({imgPath,title,description,tech,techD,link,a}) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
  <Card.Img variant="top" src={imgPath} alt="card-img" style={{ height: "210px" }} />
  <Card.Body
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // pushes top and bottom apart
      height: "100%",
    }}
  >
    <div>
      <Card.Title>{title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
      <Card.Title>{tech}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>{techD}</Card.Text>
    </div>

    {/* Buttons at the bottom */}
    <div >
      <Button variant="primary" href={link} target="_blank">
        <BiLinkExternal /> &nbsp;
      </Button>
      &nbsp;&nbsp;
      <Button variant="primary" href={a} target="_blank">
        <AiFillGithub /> &nbsp;
      </Button>
    </div>
  </Card.Body>
</Card>

  );
}
export default ProjectCards;