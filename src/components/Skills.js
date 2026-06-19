import { useEffect, useRef } from "react";
import { FaPython, FaReact, FaAws, FaGitAlt } from "react-icons/fa";
import { SiGo, SiGraphql, SiMysql, SiAmazondynamodb, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import colorSharp from "../assets/img/color-sharp.png";
// FIX C9 / M7: removed unused useRef — scrollRef was declared but never actually used

const SKILLS = [
  { id: "go",       name: "Go (Golang)",     icon: <SiGo             size={52} color="#00ADD8" />, desc: "Backend Systems"  },
  { id: "python",   name: "Python",          icon: <FaPython         size={52} color="#3776AB" />, desc: "ML & Scripting"   },
  { id: "react",    name: "React JS",        icon: <FaReact          size={52} color="#61DAFB" />, desc: "Frontend"         },
  { id: "api",      name: "RESTful APIs",    icon: <TbApi            size={52} color="#F89820" />, desc: "API Design"       },
  { id: "graphql",  name: "GraphQL",         icon: <SiGraphql        size={52} color="#E10098" />, desc: "Query Language"   },
  { id: "aws",      name: "AWS Lambda",      icon: <FaAws            size={52} color="#FF9900" />, desc: "Serverless"       },
  { id: "dynamo",   name: "Amazon DynamoDB", icon: <SiAmazondynamodb size={52} color="#4053F2" />, desc: "NoSQL DB"         },
  { id: "mysql",    name: "MySQL",           icon: <SiMysql          size={52} color="#4479A1" />, desc: "Relational DB"    },
  { id: "mongo",    name: "MongoDB",         icon: <SiMongodb        size={52} color="#47A248" />, desc: "Document DB"      },
  { id: "git",      name: "Git & GitHub",    icon: <FaGitAlt         size={52} color="#F05032" />, desc: "Version Control"  },
];

export const Skills = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <p>A curated stack of backend engineering, database management, and cloud integration tools.</p>

              {/* Native swipe strip — touch-friendly, loopable infinite track */}
              <div className="skills-swipe-wrap">
                <div ref={trackRef} className="skills-swipe-track">
                  {/* Duplicated list items mapped with copy index for unique keys and loop logic */}
                  {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                    <div className="skill-chip" key={`${skill.id}-copy-${index}`}>
                      <div className="skill-chip-icon">{skill.icon}</div>
                      <span className="skill-chip-name">{skill.name}</span>
                      <span className="skill-chip-desc">{skill.desc}</span>
                    </div>
                  ))}
                </div>
                <div className="skills-fade-left"  aria-hidden="true" />
                <div className="skills-fade-right" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
    </section>
  );
};
