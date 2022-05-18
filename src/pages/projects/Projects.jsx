import React from "react";
import { Container } from "@nextui-org/react";

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
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        minHeight: "500px",
      }}
      className="animate-fadeIn"
    >
      <ProjectsData />
    </Container>
  );
};

export default Projects;
