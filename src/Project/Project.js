import React from "react";
import "./Project.css";

const Project = ({ ...props }) => {
  const { project } = props;
  const image = require(`./${project.img}`);
  return (
    <section className="project">
      <div>
        <img className="project-image" src={image} />
      </div>
      <div className="project-name">{project.name}</div>
      <div className="project-links">
        <a href={project.repo_link} className="project-link">
          Repo
        </a>
        <span className="project-link-divider"> | </span>
        <a href={project.live_link} className="project-link">
          Live View
        </a>
      </div>
    </section>
  );
};

export default Project;
