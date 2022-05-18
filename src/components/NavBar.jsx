import React, { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";
import { Container, Link, Col, Row } from "@nextui-org/react";

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

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [isMobile, setIsMobile] = useState(getWindowDimensions().width < 768);
  const [windowDimentions, setWindowDimentions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimentions(getWindowDimensions());
      if (getWindowDimensions().width >= 768) {
        setIsMobile(false);
        setIsOpen(false);
      } else {
        setIsMobile(true);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSelected = (link) => {
    return window.location.pathname === link;
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => setIsOpen(!isOpen);

  const handleBurgerAnimation = () => {
    if (!isOpen) {
      return "transform-gpu rotate-180";
    }
    return "transform-gpu rotate-0 text-lgbtq-pink";
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
      {isMobile ? null : (
        <Container>
          <Row
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            {nav.map((item, index) => {
              return (
                <Col
                  css={{
                    display: "flex",
                    width: "fit-content",
                    justifyContent: "end",
                    alignItems: "end",
                  }}
                >
                  <Link
                    key={index}
                    href={item.link}
                    block
                    color={isSelected(item.link) ? "primary" : "default"}
                    css={{
                      fontSize: "1rem",
                    }}
                  >
                    {item.name}
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      {/* Hamburger */}
      <div
        onClick={handleNavClick}
        className="md:hidden bg-transparent hover:bg-opacity-50 hover:bg-black hover:text-lgbtq-blue z-10 h-full w-[80px] flex justify-center items-center duration-300"
      >
        <BiUpArrow
          size={35}
          className={"duration-300 " + handleBurgerAnimation()}
        />
      </div>

      {/* Mobile menu */}
      {isOpen ? (
        <Container
          justify="center"
          alignContent="center"
          css={{
            position: "absolute",
            top: "81px",
            left: "0",
            width: "100vw",
            flexDirection: "column",
            background: "black",
            zIndex: "10",
            alignItems: "center",
            justifyContent: "evenly",
            height: "calc(100vh - 81px)",
            minWidth: "100vw",
            maxWidth: "100vw",
            m: "0",
            p: "0",
            display: "flex" || "none",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
          className="md: hidden"
        >
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {nav.map((item, index) => {
              return (
                <Row justify="center">
                  <Link
                    key={index}
                    href={item.link}
                    block
                    color={isSelected(item.link) ? "primary" : "default"}
                    css={{
                      textAlign: "center",
                      fontSize: "3rem",
                    }}
                  >
                    {item.name}
                  </Link>
                </Row>
              );
            })}
          </Col>
        </Container>
      ) : null}

      <div className="w-full h-1 top-[80px] left-0 absolute bg-gradient-to-r from-[#66faff] via-[#ff66f7] to-[#66faff] bg-200% animate-slideBackGround z-10 "></div>
    </div>
  );
};

export default NavBar;
