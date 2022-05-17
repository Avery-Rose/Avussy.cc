import React from "react";

import Container from "../../components/Container";

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
  return <Container element={<ContactData />} />;
};

export default Contact;
