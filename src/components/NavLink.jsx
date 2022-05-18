import React from "react";

import { Link } from "@nextui-org/react";

const NavLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { link, name } = props;

  const isSelected = () => {
    return window.location.pathname === link;
  };

  return (
    <li className=" h-10 flex justify-center items-center">
      <Link
        href={link}
        color={isSelected() ? "primary" : "default"}
        css={{ size: "fit-content" }}
        className=""
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
