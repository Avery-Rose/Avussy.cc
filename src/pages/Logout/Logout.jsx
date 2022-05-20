import React, { useEffect } from "react";

import { Container, Loading } from "@nextui-org/react";

import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

const Logout = ({ handleLogout }) => {
  useEffect(() => {
    handleLogout((res) => {
      if (res.success) {
        window.location.href = "/";
      }
    });
  });

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
      className="animate-fadeIn overflow-scroll"
    >
      <Container
        fluid
        css={{
          display: "flex",
          paddingTop: "2rem",
          paddingBottom: "5rem",
          justifyContent: "center",
          alignItems: "center",
          m: 0,
          h: "100%",
          w: "100%",
        }}
        className="sm:w-100"
      >
        <Loading>Logging Out...</Loading>
      </Container>
    </Container>
  );
};

export default Logout;
