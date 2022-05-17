import React from "react";
import Container from "../../components/Container";

const ProjectsData = () => {
  return (
    <span className="text-4xl md:text-6xl animate-pulse">
      🚧
      <span className="text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue">
        {` Projects `}
      </span>
      🚧
    </span>
  );
};

const Projects = () => {
  return <Container element={<ProjectsData />} />;
};

export default Projects;
