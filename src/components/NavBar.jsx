import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";

import NavLink from "./NavLink";

const NavBar = () => {
  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => setIsOpen(!isOpen);

  const handleBurgerAnimation = () => {
    if (!isOpen) {
      return "rotate-180 ";
    }
    return "rotate-0 text-lgbtq-pink";
  };

  return (
    <div className="select-none fixed w-full h-[80px] flex justify-between items-center bg-blue-dark text-white z-10 scroll">
      <div
        className="group cursor-pointer z-10  px-4"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <span className="text-4xl select-none duration-300 group-hover:text-lgbtq-pink">
          Avussy.cc
        </span>
      </div>

      {/* menu */}
      <ul className="hidden md:flex justify-items-center align-middle h-full items-center">
        {nav.map((item, index) => {
          return (
            <NavLink
              key={index}
              link={item.link}
              name={item.name}
              className=""
              handleNavClick={handleNavClick}
            />
          );
        })}
      </ul>
      {/* Hamburger */}
      <div
        onClick={handleNavClick}
        className="md:hidden bg-transparent hover:bg-opacity-50 hover:bg-black z-10 h-full w-[80px] flex justify-center items-center duration-300"
      >
        <BiUpArrow
          size={35}
          className={"duration-300 " + handleBurgerAnimation()}
        />
        {/*isOpen ? <FaTimes size="35" /> : <FaBars size="35" />*/}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !isOpen
            ? "hidden"
            : "absolute top-[81px] left-0 w-full h-screen bg-blue-deep-dark flex flex-col items-center md:hidden"
        }
      >
        <ul className="flex flex-col justify-center items-center w-full select-none">
          {nav.map((item, index) => {
            return (
              <NavLink
                key={index}
                link={item.link}
                name={item.name}
                className="py-6 text-4xl text-center"
                handleNavClick={handleNavClick}
              />
            );
          })}
        </ul>
      </div>

      <div className="w-full h-1 top-[80px] left-0 absolute bg-gradient-to-r from-[#66faff] via-[#ff66f7] to-[#66faff] bg-200% animate-slideBackGround"></div>
    </div>
  );
};

export default NavBar;
