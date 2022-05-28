import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mobileItem, desktopItem } from './Varients';

export const NavItem = ({ children, to, isMobile }) => {
  return (
    <motion.div
      variants={isMobile ? mobileItem : desktopItem}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
        },
      }}
      className='nav-link'
    >
      <Link to={to}>{children}</Link>
    </motion.div>
  );
};
