import React from 'react';
import { BurgerMenu } from './BurgerMenu';
import { motion } from 'framer-motion';
import { menu } from './Varients';
import { generateLinks, links } from './links';

const NavProvider = (props) => {
  return (
    <>
      {props.isMobile ? (
        <BurgerMenu
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
          burgerHover={props.burgerHover}
          setBurgerHover={props.setBurgerHover}
        />
      ) : (
        <motion.ul
          className='nav-items'
          variants={menu}
          initial='hidden'
          animate={'visible'}
          exit={'hidden'}
        >
          {generateLinks(links, props.isMobile)}
        </motion.ul>
      )}
    </>
  );
};

export default NavProvider;
