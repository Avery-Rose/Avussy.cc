import React from "react";
import Container from "../../components/Container";

const NotFound = () => {
  return <Container element={<NotFoundData />} />;
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
