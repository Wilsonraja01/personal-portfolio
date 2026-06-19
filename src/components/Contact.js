import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const FUN_FACTS = [
  { id: "golang", emoji: "⚡", text: "Golang enthusiast who loves optimizing microservices." },
  { id: "grad", emoji: "🎓", text: "IT graduate from Dr. N.G.P. Institute of Technology." },
  { id: "traveller", emoji: "✈️", text: "A passionate traveller who loves exploring new destinations and building clean code." },
  { id: "scale", emoji: "🚀", text: "Passionate about designing and building high-performance scalable systems." },
  { id: "rpg", emoji: "🎮", text: "Enjoys developing retro RPG web games in spare time." }
];

const TECH_TAGS = [
  { id: "go", name: "Go (Golang)", color: "#00ADD8" },
  { id: "python", name: "Python", color: "#3776AB" },
  { id: "react", name: "React.js", color: "#61DAFB" },
  { id: "aws", name: "AWS Lambda", color: "#FF9900" },
  { id: "mysql", name: "MySQL / NoSQL", color: "#4479A1" },
  { id: "git", name: "Git & GitHub", color: "#2496ED" }
];

export const Contact = () => {
  return (
    <section className="contact" id="about">
      <Container>
        <Row className="align-items-center g-5">

          {/* Left col — photo and quote */}
          <Col xs={12} md={5} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="about-img-wrapper">
                    <img src={contactImg} alt="Wilson Antony portrait" className="about-photo" />
                    <div className="about-img-ring" />
                  </div>
                  <br />
                  <div className="about-quote-block">
                    <p>"Next time you're stuck on a problem, try taking a shower and see if you come up with a solution 😅"</p>
                    <footer>- Wilson Antony</footer>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Right col — fun facts, tech pills, stats */}
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="about-section-label">About Me</h2>
                  <div className="about-title-row">
                    <h2 className="about-fun-heading">
                      Hi! I'm <span className="about-name-highlight">Wilson Antony</span>
                    </h2>
                    <span className="about-wave" role="img" aria-label="waving hand">👋</span>
                  </div>
                  <p className="about-tagline">
                    Software Development Engineer — Golang Developer
                  </p>

                  <div className="about-fun-facts">
                    <ul className="fun-facts-list">
                      {FUN_FACTS.map((fact) => (
                        <li className="fun-fact-item" key={fact.id}>
                          <span className="fun-fact-emoji" role="img" aria-hidden="true">{fact.emoji}</span>
                          <span className="fun-fact-text">{fact.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="about-tech-row">
                    <div className="about-tech-pills">
                      {TECH_TAGS.map((tag) => (
                        <span
                          key={tag.id}
                          className="about-tech-pill"
                          style={{ borderColor: tag.color, color: tag.color }}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="about-stats-row">
                    <div className="about-stat">
                      <span className="about-stat-num">2+</span>
                      <span className="about-stat-label">Years Exp</span>
                    </div>
                    <div className="about-stat-divider" />
                    <div className="about-stat">
                      <span className="about-stat-num">Stateless</span>
                      <span className="about-stat-label">Thinker</span>
                    </div>
                    <div className="about-stat-divider" />
                    <div className="about-stat">
                      <span className="about-stat-num">O(1)</span>
                      <span className="about-stat-label">Problem Solver</span>
                    </div>
                  </div>

                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
