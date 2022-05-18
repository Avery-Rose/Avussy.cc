import React from "react";
import { Container } from "@nextui-org/react";

const NotFound = () => {
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
      <NotFoundData />
    </Container>
  );
};

const NotFoundData = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
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
