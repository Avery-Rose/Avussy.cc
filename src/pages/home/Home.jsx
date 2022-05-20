import React, { useEffect } from "react";
import {
  FaGithub,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import SocialLink from "./components/SocialLink";

import { Grid, Container, Text, Card } from "@nextui-org/react";

import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const Home = (props) => {
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
        overflow: "scroll",
      }}
      className="animate-fadeIn"
    >
      <HomeData props={props} />
    </Container>
  );
};

const HomeData = (props) => {
  const { user, handleLogin } = props.props;

  useEffect(() => {
    handleLogin({}, (res) => {
      if (!res.success) {
        console.log(res.message);
      }
    });
  }, [user, handleLogin]);

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
    <div className="flex flex-col justify-center items-center h-fit md:h-full w-full p-10">
      <div className="max-w-8xl">
        <Card
          hoverable
          shadow
          borderWeight="0"
          css={{
            maxWidth: "700px",
          }}
        >
          <Text h2>
            Hello, my name is{" "}
            <Text
              b
              css={{
                color: "var(--t-pink)",
                fontWeight: "bold",
              }}
            >
              Avery
            </Text>
          </Text>
          <Text>
            I{"'"}m 19 years of age. I like to code and plan to go into the
            field. Currently I am focusing on frontend development and design.
            This website is going to be a project that I can practice on.
          </Text>
          <Card.Footer>
            <Grid.Container gap={2} justify="center">
              {getSocials()}
            </Grid.Container>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Home;
