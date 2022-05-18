import React from "react";
import { Container } from "@nextui-org/react";

const ContactData = () => {
  return (
    <span className="text-4xl md:text-6xl animate-pulse">
      🚧
      <span className="text-transparent bg-clip-text bg-gradient-to-t from-lgbtq-pink to-lgbtq-blue">
        {` Contact `}
      </span>
      🚧
    </span>
  );
};

const Contact = () => {
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
      <ContactData />
    </Container>
  );
};

export default Contact;
