import React from "react";

const Project = ({ ...props }) => {
  const { project } = props;
  return (
    <section>
      <div>{project.name}</div>
    </section>
  );
};

export default Project;
