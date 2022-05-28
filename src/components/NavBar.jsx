import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import '../styles/navbar.css';

import { motion } from 'framer-motion';
import { ScrollTop } from './ScrollTop';
import { BurgerItem } from './BurgerList';
import NavProvider from './NavProvider';

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [burgerHover, setBurgerHover] = React.useState(false);
  const [lastScrollPos, setLastScrollPos] = React.useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      if (window.scrollY > lastScrollPos) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollPos(window.scrollY);

      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
        setShowNavbar(true);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollPos]);

  return (
    <motion.div>
      <>
        <ScrollTop showScrollTop={showScrollTop} />
        <BurgerItem isOpen={isOpen}></BurgerItem>
      </>

      <motion.nav
        className='navbar'
        initial={{
          y: 0,
          backgroundColor: '#2c2c2c',
        }}
        animate={{
          y: showNavbar || isOpen ? 0 : -80,
          backgroundColor: isOpen ? '#1a1a1a' : '#2c2c2c',
          // backgroundColor:  !isOpen ? '#2c2c2c' : '#1a1a1a',
          // shadow
          boxShadow:
            lastScrollPos > 5 && !isOpen && showNavbar
              ? '0px 0px 15px rgba(0, 0, 0, 0.5)'
              : '0px 0px 0px rgba(0, 0, 0, 0.5)',
        }}
        exit={{
          backgroundColor: '#2c2c2c',
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Link className='logo' to='/'>
          Avussy.cc
        </Link>
        <NavProvider
          isMobile={isMobile}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          burgerHover={burgerHover}
          setBurgerHover={setBurgerHover}
        />
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
