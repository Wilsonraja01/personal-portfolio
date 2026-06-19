import { Container, Row, Col } from "react-bootstrap";
import { Briefcase, Calendar2Week } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

// FIX L5: stable string IDs as keys instead of array index
const EXPERIENCES = [
  {
    id: "hudini-sde1",
    role: "Software Development Engineer - I (SDE-1)",
    company: "Hudini.io",
    duration: "July 2024 – Present",
    points: [
      "Developed high-throughput scalable backend APIs using Go and AWS to power web and mobile applications for large-scale enterprise platforms.",
      "Built robust integrations and automated workflow systems to sync real-time state transitions across complex distributed environments.",
      "Customised and deployed core application microservices modules, ensuring high availability, strict latency budgets, and secure RESTful communications.",
      "Optimised database query performance, microservice loading times, and automated cache synchronization systems to handle heavy operational traffic.",
    ],
  },
  {
    id: "calibraint-intern",
    role: "Associate Software Developer (Intern)",
    company: "Calibraint Technology",
    duration: "November 2022 – January 2023",
    points: [
      "Built user-friendly web applications utilising React JS and refined version control skills through collaborative development on GitHub.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Professional Experience</h2>
                  <p className="section-subtitle">My professional journey in software engineering and development.</p>

                  <div className="timeline">
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="timeline-item">
                        <div className="timeline-icon" aria-hidden="true">
                          <Briefcase size={22} />
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <h3 className="role-title">{exp.role}</h3>
                            <h4 className="company-name">{exp.company}</h4>
                            <div className="duration-badge">
                              <Calendar2Week size={14} className="me-2" aria-hidden="true" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          <ul className="timeline-bullets">
                            {exp.points.map((point, idx) => (
                              // FIX L5: point text is stable — index key is acceptable here
                              // since the inner list is static content that never reorders
                              <li key={`${exp.id}-point-${idx}`}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
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
