import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaGithub,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaTags,
} from "react-icons/fa";
import SocialLink from "./components/SocialLink";
import Container from "../../components/Container";

const Home = () => {
  return <Container element={HomeData()} />;
};

const HomeData = () => {
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
    {
      name: "Instagram",
      link: "https://www.instagram.com/cattgirlava/",
      icon: <FaInstagram />,
      color: "#e1306c",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      color: "#7289da",
      value: "avery#9957",
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
          value={item.value}
        />
      );
    });
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <span className="text-1xl sm:text-2xl text-white">
            Hello, my name is{" "}
          </span>
          <span className="text-4xl sm:text-4xl font-bold text-lgbtq-pink">
            Avery{" "}
          </span>
        </div>
        <span className="text-white py-4 max-w[700px]">
          I{"'"}m 19 years of age. I like to code and plan to go into the field.
          Currently I am focusing on frontend development and design. This
          website is going to be a project that I can practice on.
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        {getSocials()}
      </div>
      <div className="max-w-fit max-h-fit my-2">
        <button
          className="group flex items-center text-white border-2 px-6 py-3 hover:border-lgbtq-pink select-none hover:bg-[#ff66f73c] duration-300 active:bg-[#ff66f76c]"
          onClick={() => {
            window.open("https://github.com/Averyyyyyyyy/Avussy.cc", "_blank");
          }}
        >
          <span className="">Website Repo</span>
          <span>
            <HiArrowNarrowRight className="ml-2" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
