import React from "react";

const Contact = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-blue-deep-dark text-white min-h-[500px]"
      id="main"
    >
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center items-center h-full animate-drop">
        <span className="text-4xl md:text-6xl animate-pulse">
          🚧
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue">
            Contact
          </span>
          🚧
        </span>
      </div>
    </div>
  );
};

export default Contact;
