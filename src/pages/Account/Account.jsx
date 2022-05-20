import React, { useEffect } from "react";
import { Container, Loading } from "@nextui-org/react";

import AccountInfo from "../../components/AccountInfo";

const Account = ({ user, handleLogin }) => {
  useEffect(() => {
    handleLogin({}, (res) => {});
  }, [user, handleLogin]);

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
        {user ? <AccountInfo user={user} /> : <Loading>Loading...</Loading>}
      </Container>
    </Container>
  );
};

export default Account;
