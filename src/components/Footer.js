import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center gy-4">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <div className="footer-logo">
              <a href="#home" aria-label="Back to top">
                <img src={logo} alt="Wilson Antony logo" />
              </a>
            </div>
          </Col>

          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/wilson-antony-ra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Wilsonraja01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/wilsonraja.r.a_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="mailto:wilsonraja.ra@gmail.com" aria-label="Email">
                <img src={navIcon4} alt="Email" />
              </a>
            </div>
            <p className="animated-copyright">
              Copyright &copy; 2026. Designed &amp; Developed by Wilson Antony. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
