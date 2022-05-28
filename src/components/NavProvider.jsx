import React from 'react';
import { BurgerMenu } from './BurgerMenu';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';
import { menu } from './Varients';

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
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/trans'>Trans</NavItem>
          <NavItem to='/dataset'>Profanity</NavItem>
        </motion.ul>
      )}
    </>
  );
};

export default NavProvider;

// {!isMobile && (
//   <motion.ul
//     className='nav-items'
//     variants={menu}
//     initial='hidden'
//     animate={'visible'}
//     exit={'hidden'}
//   >
//     <NavItem to='/'>Home</NavItem>
//     <NavItem to='/trans'>Trans</NavItem>
//     <NavItem to='/dataset'>Profanity</NavItem>
//   </motion.ul>
// )}

// {isMobile && (
//   <BurgerMenu
//     isOpen={isOpen}
//     setIsOpen={setIsOpen}
//     burgerHover={burgerHover}
//     setBurgerHover={setBurgerHover}
//   ></BurgerMenu>
// )}
