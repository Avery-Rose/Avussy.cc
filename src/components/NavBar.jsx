import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import NavLink from "./NavLink";

const NavBar = () => {
  const nav = [
    {
      name: "Home",
      link: "/",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-dark text-white z-10 scroll">
      <div
        className="cursor-pointer z-10 hover:text-lgbtq-pink duration-300"
        onClick={() => {
          if (window.location.pathname !== "/") {
            window.location.href = "/";
          }
          console.log(window.location.pathname);
        }}
      >
        <span className="text-4xl select-none">Avussy.cc</span>
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
            />
          );
        })}
      </ul>
      {/* Hamburger */}
      <div onClick={handleNavClick} className="md:hidden z-10 py-5 pl-5">
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !isOpen
            ? "hidden"
            : "absolute top-[81px] left-0 w-full h-screen bg-blue-deep-dark flex flex-col items-center"
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
