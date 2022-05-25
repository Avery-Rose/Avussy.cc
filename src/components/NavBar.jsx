import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

import '../styles/navbar.css';

import { motion } from 'framer-motion';
import { Fab } from '@mui/material';

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

  const menu = {
    hidden: { y: '-100vh', transition: { duration: 0.5, delay: 0.2 } },
    visible: { y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const menuItem = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, type: 'spring', stiffness: 100 },
    },
  };

  const menuItemDesktop = {
    hidden: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, type: 'spring', stiffness: 60 },
    },
  };

  return (
    <motion.div>
      <>
        <motion.div
          className='scroll-top'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: showScrollTop ? 1 : 0,
          }}
          transition={
            showScrollTop
              ? { type: 'spring', stiffness: 100 }
              : { duration: 0.2 }
          }
        >
          <Fab className='scroll-top-icon' aria-label='go top' color='primary'>
            <UpIcon />
          </Fab>
        </motion.div>
        {/* Mobile NavMenu */}
        <motion.div
          className='burger-menu'
          variants={menu}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          exit={'hidden'}
        >
          <motion.li variants={menuItem} className='nav-link'>
            <Link to='/'>Home</Link>
          </motion.li>
          <motion.li variants={menuItem} className='nav-link'>
            <Link to='/trans'>Trans</Link>
          </motion.li>
        </motion.div>
      </>

      <motion.nav
        className='navbar'
        initial={{
          y: 0,
          backgroundColor: '#2c2c2c',
        }}
        animate={{
          y: showNavbar || isOpen ? 0 : -80,
          backgroundColor: isOpen
            ? '#1a1a1a'
            : lastScrollPos > 5
            ? '#3c3c3c'
            : '#2c2c2c',
          // backgroundColor:  !isOpen ? '#2c2c2c' : '#1a1a1a',
          // shadow
          boxShadow:
            lastScrollPos > 5 && !isOpen
              ? '0px 0px 10px rgba(0, 0, 0, 0.5)'
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
        {/* Desktop NavMenu */}
        {!isMobile && (
          <motion.ul
            className='nav-items'
            variants={menu}
            initial='hidden'
            animate={'visible'}
            exit={'hidden'}
          >
            <motion.li
              variants={menuItemDesktop}
              key='home'
              className='nav-link'
            >
              <Link to='/'>Home</Link>
            </motion.li>
            <motion.li
              variants={menuItemDesktop}
              key='Trans'
              className='nav-link'
            >
              <Link to='/trans'>Trans</Link>
            </motion.li>
          </motion.ul>
        )}

        {isMobile && (
          <div
            className='burger'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            onMouseEnter={() => {
              setBurgerHover(true);
            }}
            onMouseLeave={() => {
              setBurgerHover(false);
            }}
          >
            <div className='lines'>
              <motion.div
                className='line'
                initial={{
                  y: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  y: isOpen ? 8 : burgerHover ? -2 : 0,
                  rotate: isOpen ? [0, 0, 0, 45] : 0,
                }}
                exit={{
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                }}
              ></motion.div>
              <motion.div
                className='line'
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  opacity: isOpen ? 0 : 1,
                  rotate: 0,
                  y: 0,
                }}
                exit={{
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              ></motion.div>
              <motion.div
                className='line'
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  y: isOpen ? -8 : burgerHover ? 2 : 0,
                  rotate: isOpen ? [0, 0, 0, -45] : 0,

                  opacity: 1,
                }}
                exit={{
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                }}
              ></motion.div>
            </div>
          </div>
        )}
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
