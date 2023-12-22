import { Navbar,Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br></br>
              <br></br>
              <a href="https://www.linkedin.com/in/wilson-antony-ra/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Wilsonraja01" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/wilsonraja.r.a_official/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="mailto: wilsonraja.ra@gmail.com" target="_blank"><img src={navIcon4} alt="Icon" /></a>
              </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
          
          <Col size={12} sm={6}>
            <div id="logos">
            {/* <img src={logo} alt="Logo" /> */}
            <Navbar.Brand href="#home">
           
           <img src={logo} alt="Logo"/>
         
         
       </Navbar.Brand>
            </div>
          </Col>
          
        </Row>
        
      </Container>
    </footer>
  )
}
