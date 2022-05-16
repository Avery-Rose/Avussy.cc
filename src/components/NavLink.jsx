import React from "react";

const NavLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { link, name, className, handleNavClick } = props;

  const isSelected = () => {
    if (window.location.pathname === link) {
      return "text-gray-400 cursor-default";
    }
    return "hover:text-lgbtq-pink cursor-pointer";
  };

  return (
    <li
      className={
        className + " p-3 w-full duration-300 select-none " + isSelected()
      }
      onClick={() => {
        console.log(window.location.pathname);
        if (window.location.pathname !== link) {
          handleNavClick();
          window.location.href = link;
        }
      }}
    >
      <span>{name}</span>
    </li>
  );
};

export default NavLink;
