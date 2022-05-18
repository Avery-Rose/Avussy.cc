import React from "react";
import { Container } from "@nextui-org/react";

const ProjectsData = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <span className="text-4xl md:text-6xl animate-pulse ">
        🚧
        <span className="text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue">
          {` Projects `}
        </span>
        🚧
      </span>
    </div>
  );
};

const Projects = () => {
  return (
    <Container
      css={{
        position: "absolute",
        padding: "0",
        margin: "0",
        top: "80px",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
        minWidth: "100%",
      }}
      className="animate-fadeIn overflow-hidden"
    >
      <ProjectsData />
    </Container>
  );
};

export default Projects;
