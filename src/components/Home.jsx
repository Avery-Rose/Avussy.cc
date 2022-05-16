import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaSteam, FaTwitch, FaTwitter } from "react-icons/fa";
import SocialLink from "./SocialLink";

const Home = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/Averyyyyyyyy",
      icon: <FaGithub />,
      color: "#333",
    },
    {
      name: "Steam",
      link: "https://steamcommunity.com/id/cummyavery/",
      icon: <FaSteam />,
      color: "#171a21",
    },
    {
      name: "Twitch",
      link: "https://www.twitch.tv/cattgirlava",
      icon: <FaTwitch />,
      color: "#6441a5",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/cattgirlava",
      icon: <FaTwitter />,
      color: "#1da1f2",
    },
  ];

  const getSocials = () => {
    return socials.map((item, index) => {
      return (
        <SocialLink
          key={index}
          icon={item.icon}
          link={item.link}
          name={item.name}
          color={item.color}
        />
      );
    });
  };

  return (
    <div
      name="home"
      className="w-full h-screen bg-blue-deep-dark text-white min-h-[500px]"
      id="main"
    >
      {/* Container */}
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full animate-drop">
        {/* Title */}
        <div>
          <span className="text-1xl sm:text-2xl text-gray-300">
            Hi, I{"'"}m{" "}
          </span>
          <span className="text-4xl sm:text-4xl font-bold text-lgbtq-pink">
            Avery
          </span>
        </div>
        {/* Subtitle */}
        <h2 className="text-2xl sm:text-2xl font-bold text-[#8892b0]">
          I{"'"}m a IT student.
        </h2>

        <p className="text-white py-4 max-w[700px]">
          I{"'"}m 19 years old and currently wanting to focus on frontend
          development. This website is going to be one of my projects that I
          plan to work on.
        </p>
        <div className="grid grid-cols-2 md:flex md:justify-between">
          {getSocials()}
        </div>
        <div>
          <button
            className="group flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-lgbtq-pink hover:border-lgbtq-pink select-none duration-300"
            onClick={() => {
              window.open(
                "https://github.com/Averyyyyyyyy/Avussy.cc",
                "_blank"
              );
            }}
          >
            Website Repo
            <span>
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
