import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import '../styles/navbar.css';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menu = {
    hidden: { y: '-100vh', transition: { duration: 0.5, delay: 0.2 } },
    visible: { y: 0, transition: { duration: 0.5 } },
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

  return (
    <motion.div>
      <>
        <motion.div
          className='burger-menu'
          variants={menu}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          exit={'hidden'}
        >
          <motion.li variants={menuItem}>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </motion.li>
          <motion.li variants={menuItem}>
            <Link className='nav-link' to='/trans'>
              Trans
            </Link>
          </motion.li>
        </motion.div>
      </>

      <nav className='navbar'>
        <span className='logo'>Avussy.cc</span>
        {!isMobile && (
          <ul className='nav-items'>
            <motion.li variants={menuItem} key='home'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </motion.li>
            <motion.li variants={menuItem} key='trans'>
              <Link className='nav-link' to='/trans'>
                Trans
              </Link>
            </motion.li>
          </ul>
        )}

        {isMobile && (
          <div
            className='burger'
            onClick={() => {
              setIsOpen(!isOpen);
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
                  y: isOpen ? [0, 8, 8] : [8, 8, 0],
                  rotate: isOpen ? [0, 0, 45] : [45, 0, 0],
                }}
              ></motion.div>
              <motion.div
                className='line'
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  opacity: isOpen ? [1, 0, 0] : [0, 0, 1],
                  rotate: 0,
                  y: 0,
                }}
              ></motion.div>
              <motion.div
                className='line'
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  y: isOpen ? [0, -8, -8] : [-8, -8, 0],
                  rotate: isOpen ? [0, 0, -45] : [-45, 0, 0],
                  opacity: 1,
                }}
              ></motion.div>
            </div>
          </div>
        )}
      </nav>
    </motion.div>
  );
};

export default Navbar;
