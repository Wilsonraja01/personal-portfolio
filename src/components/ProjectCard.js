import { Col } from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import {BsGithub} from "react-icons/bs";
export const ProjectCard = ({ title, description, imgUrl,demo,project }) => {
  return (
    <Col size={12} sm={6} md={4}>

      <div className="proj-imgbx">
        <img src={imgUrl} />
       
        {/* <button href>github</button> */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <button>
          <Button className="button"
             variant="primary"
            href={demo}
             target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
       <Button
       variant="primary" href={project} target="_blank" style={{ marginLeft: "10px" }}>
          <BsGithub /> 
          {/* {props.isBlog ? "Blog" : "GitHub"} */} {"GitHub"}
        </Button>
       </button>
       </div>
      </div>
    </Col>
  )
}
