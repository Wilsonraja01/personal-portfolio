import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// FIX H1: Removed the Col wrapper from inside ProjectCard.
// The parent (Projects.js) now controls the layout container,
// keeping ProjectCard as a pure presentational component.
export const ProjectCard = ({ title, description, imgUrl, finished, demo, projectlink }) => {
  return (
    <div className="proj-card">
      {/* Image thumbnail — always visible, no hover-only overlay */}
      <div className="proj-img-wrap">
        <img src={imgUrl} alt={title} loading="lazy" />
        <div className="proj-img-overlay" aria-hidden="true" />
      </div>

      {/* Card body */}
      <div className="proj-body">
        <h4 className="proj-title">{title}</h4>
        <p className="proj-desc">{description}</p>
        {finished && (demo || projectlink) && (
          <div className="proj-actions">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn proj-btn-demo"
                aria-label={`View demo of ${title}`}
              >
                <CgWebsite size={14} aria-hidden="true" />
                <span>Demo</span>
              </a>
            )}
            {projectlink && (
              <a
                href={projectlink}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn proj-btn-github"
                aria-label={`View GitHub repository for ${title}`}
              >
                <BsGithub size={14} aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
