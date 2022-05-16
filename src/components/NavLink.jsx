import React from "react";

const NavLink = (props) => {
  const { link, name, className } = props;

  return (
    <li
      className={className + " p-3 w-full hover:text-lgbtq-pink duration-300"}
    >
      <a className="" href={link}>
        {name}
      </a>
    </li>
  );
};

export default NavLink;
