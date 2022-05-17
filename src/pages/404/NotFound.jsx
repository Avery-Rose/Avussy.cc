import React from "react";

const NotFound = () => {
  return (
    <div
      name="NotFound"
      className="w-full h-screen bg-blue-deep-dark text-white min-h-[500px]"
      id="main"
    >
      {/* Container */}
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center items-center h-full animate-drop">
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl animate-pulse">
          Page not found
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
