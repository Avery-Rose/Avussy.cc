import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItemDesktop } from './Varients';

export const DesktopItem = ({ children, to }) => {
  return (
    <motion.div
      variants={menuItemDesktop}
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
