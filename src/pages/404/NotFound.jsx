import React from "react";
import { Container } from "@nextui-org/react";

const NotFound = () => {
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
      <NotFoundData />
    </Container>
  );
};

const NotFoundData = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue animate-pulse">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl animate-pulse">
        Page not found
      </h2>
    </div>
  );
};

export default NotFound;
