import React from "react";

const Container = (props) => {
  // eslint-disable-next-line react/prop-types
  const { element } = props;

  const genElement = () => {
    if (element) {
      return element;
    } else {
      console.log("%c Missing Page Data", "color: #f00; font-size: 20px;");
      return genError("Error While Loading");
    }
  };

  const genError = (value) => {
    return (
      <span className="text-4xl md:text-6xl animate-pulse">
        ❗
        <span className="text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue">
          {` ${value} `}
        </span>
        ❗
      </span>
    );
  };

  return (
    <div
      name="container"
      className="absolute top-[80px] w-full h-[calc(100vh-15vh)] bg-blue-deep-dark text-white min-h-[500px] duration-300 flex items-center animate-drop"
      id="main"
    >
      <div className="max-w-[950px] min-h-full mx-auto px-8 flex flex-col justify-center duration-300">
        {genElement()}
      </div>
    </div>
  );
};

export default Container;
