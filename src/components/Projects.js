import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import depressionMlImg  from "../assets/img/depression_ml.png";
import rpgGameImg        from "../assets/img/rpg_game.png";
import hudiniIptvImg     from "../assets/img/hudini_iptv_ipad.png";
import hudiniStaffImg    from "../assets/img/hudini_staff_connect.png";
import portfolioImg      from "../assets/img/portfolio_mockup.png";
import paraphraseAiImg   from "../assets/img/paraphrase_ai.png";
import colorSharp2       from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// FIX L3/L4: stable string IDs as keys instead of array index
const PROJECTS = [
  {
    id: "hudini-iptv",
    title: "Hudini IPTV/iPad Solution",
    description: "Go-based IPTV service integration with enterprise systems, powering large-scale digital displays and automated control systems worldwide.",
    imgUrl: hudiniIptvImg,
    finished: true,
    demo: "",
    projectlink: "",
  },
  {
    id: "hudini-staff",
    title: "Hudini Staff Connect",
    description: "Multi-channel operations platform using secure RESTful APIs for request tracking and workflow triggers.",
    imgUrl: hudiniStaffImg,
    finished: true,
    demo: "",
    projectlink: "",
  },
  {
    id: "depression-ml",
    title: "Classifying Depression using ML",
    description: "Predictive ML classifier using Python, SVM, and KNN algorithms with text mining (88% accuracy rate).",
    imgUrl: depressionMlImg,
    finished: true,
    demo: "https://youtu.be/_WrO12212Ns",
    projectlink: "https://github.com/Wilsonraja01/Wilsonraja01.github.io/tree/main/CLASSIFYING%20DEPRESSION%20USING%20MACHINE%20LEARNING%20ON%20SOCIAL%20MEDIA%20TWEETS",
  },
  {
    id: "rpg-game",
    title: "RPG — Dragon Repeller",
    description: "Interactive role-playing game built using HTML, CSS, and vanilla JavaScript.",
    imgUrl: rpgGameImg,
    finished: true,
    demo: "https://wilsonraja01.github.io/rpggame/",
    projectlink: "https://github.com/Wilsonraja01/Wilsonraja01.github.io/tree/main/rpggame",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "Responsive React JS portfolio featuring smooth transitions, clean layout, and automated GitHub Actions CI/CD deployment.",
    imgUrl: portfolioImg,
    finished: true,
    demo: "https://wilsonraja01.github.io/personal-portfolio",
    projectlink: "https://github.com/Wilsonraja01/personal-portfolio",
  },
  {
    id: "paraphrase-ai",
    title: "Real-time Paraphrase AI with DB Sync",
    description: "Flask AI app using Hugging Face text transformers, integrated with a Go monitoring sync script to write logs to MySQL.",
    imgUrl: paraphraseAiImg,
    finished: true,
    demo: "",
    projectlink: "",
  },
];

export const Projects = () => {
  const projectsTrackRef = useRef(null);

  useEffect(() => {
    const track = projectsTrackRef.current;
    if (!track) return;

    const updateScroll = () => {
      const totalWidth = track.scrollWidth;
      const singleWidth = totalWidth / 3;
      if (track.scrollLeft === 0) {
        track.scrollLeft = singleWidth;
      }
    };

    updateScroll();

    const handleScroll = () => {
      const totalWidth = track.scrollWidth;
      const singleWidth = totalWidth / 3;
      const currentScroll = track.scrollLeft;

      if (currentScroll <= 5) {
        track.scrollLeft = singleWidth + currentScroll;
      } else if (currentScroll >= singleWidth * 2 - 5) {
        track.scrollLeft = currentScroll - singleWidth;
      }
    };

    track.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScroll);
    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of my works to showcase my skills.</p>

                  {/* FIX H2: Desktop grid — wrap ProjectCards in a proper Bootstrap Row+Col */}
                  <Row className="projects-grid d-none d-md-flex">
                    {PROJECTS.map((project) => (
                      <Col key={project.id} md={4} className="mb-4 d-flex align-items-stretch">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>

                  {/* Mobile: native horizontal swipe strip */}
                  <div ref={projectsTrackRef} className="projects-scroll-container d-flex d-md-none" role="list">
                    {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, index) => (
                      <div className="project-scroll-card" key={`${project.id}-copy-${index}`} role="listitem">
                        <ProjectCard {...project} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  );
};
