/* import/no-import-module-exports */
import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const TO_ROTATE = ["Software Development Engineer - I", "Go Backend Developer"];
const PERIOD = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // FIX C3: removed unused Button import
  // FIX M1: use useCallback + explicit deps to avoid stale closure in typewriter
  const tick = useCallback(() => {
    const i = loopNum % TO_ROTATE.length;
    const fullText = TO_ROTATE[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => Math.max(prev / 2, 30));
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    } else if (!isDeleting) {
      setDelta(prev => prev);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    // FIX C1: corrected typo "aligh-items-center" → "align-items-center"
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`Hi! I'm Wilson Antony`}
                  <br />
                  <span
                    className="txt-rotate"
                    data-period="1000"
                    data-rotate='["Software Development Engineer - I","Go Backend Developer"]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                {/* FIX C2: removed stray <br></br> after button */}
                <p>Results-driven Software Development Engineer (SDE-1) with over 2 years of professional experience specializing in Go (Golang) backend development, RESTful API design, and cloud infrastructure integration.</p>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                  {"About Me"} <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* FIX L1: descriptive alt text */}
                  <img src={headerImg} alt="Wilson Antony — Software Engineer illustration" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
