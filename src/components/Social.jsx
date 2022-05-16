import React from "react";
import { FaGithub, FaSteam, FaTwitch, FaTwitter } from "react-icons/fa";
import SocialLink from "./SocialLink";

const Social = () => {
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
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full">
        {getSocials()}
      </div>
      <div className="bg-blue-deep-dark py-[10vh] border-y-2 border-lgbtq-pink">
        <div className="flex justify-center items-center text-2xl">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Social;
