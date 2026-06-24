/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'about', label: 'About', href: '#about' },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollSpy = () => {
      setScrolled(window.scrollY > 50);

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveLink('about');
        return;
      }

      const sections = ['home', 'skills', 'experience', 'projects', 'about'];
      const threshold = 120; // navbar height (75px) + small buffer

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const onUpdateActiveLink = (e, value) => {
    e.preventDefault();
    setActiveLink(value);
    setMenuOpen(false);
    const target = document.getElementById(value);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${value}`);
    }
  };

  const downloadFile = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1fsTx5rDIKDcDPzlX4hhc8DvnJvWIikJL",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // FIX H6: single source of truth for menuOpen — pass only onToggle to Navbar,
  // remove the conflicting onClick on the Toggle which caused double-toggle.
  return (
    <Navbar
      expand="md"
      expanded={menuOpen}
      className={scrolled ? "scrolled" : ""}
      onToggle={(val) => setMenuOpen(val)}
    >
      <Container>
        {/* FIX L2: descriptive alt text on logo */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Wilson Antony logo" />
        </Navbar.Brand>

        {/* FIX H6: no onClick here — Navbar.onToggle handles state */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NAV_LINKS.map(({ id, label, href }) => (
              <Nav.Link
                key={id}
                href={href}
                className={activeLink === id ? 'active navbar-link' : 'navbar-link'}
                onClick={(e) => onUpdateActiveLink(e, id)}
              >
                {label}
                {activeLink === id && <span className="nav-active-dot" />}
              </Nav.Link>
            ))}
          </Nav>

          <span className="navbar-text">
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
            <button className="resume-btn" onClick={downloadFile}>
              My Resume
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
