import React from 'react';
import { motion } from 'framer-motion';

function TopLine(props) {
  return (
    <motion.div
      className='line'
      initial={{
        y: 0,
        rotate: 0,
      }}
      animate={{
        opacity: 1,
        y: props.isOpen ? 8 : props.burgerHover ? -2 : 0,
        rotate: props.isOpen ? [0, 0, 0, 45] : 0,
      }}
      exit={{
        y: 0,
        rotate: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
      }}
    />
  );
}

function MiddleLine(props) {
  return (
    <motion.div
      className='line'
      initial={{
        y: 0,
        rotate: 0,
      }}
      animate={{
        opacity: props.isOpen ? 0 : 1,
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
    />
  );
}

function BottomLine(props) {
  return (
    <motion.div
      className='line'
      initial={{
        y: 0,
        rotate: 0,
      }}
      animate={{
        y: props.isOpen ? -8 : props.burgerHover ? 2 : 0,
        rotate: props.isOpen ? [0, 0, 0, -45] : 0,
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
    />
  );
}

export function BurgerMenu(props) {
  function toggleBurger() {
    props.setIsOpen(!props.isOpen);
  }

  return (
    <div
      className='burger'
      onClick={toggleBurger}
      onMouseEnter={() => {
        props.setBurgerHover(true);
      }}
      onMouseLeave={() => {
        props.setBurgerHover(false);
      }}
    >
      <div className='lines'>
        <TopLine isOpen={props.isOpen} burgerHover={props.burgerHover} />
        <MiddleLine isOpen={props.isOpen} />
        <BottomLine isOpen={props.isOpen} burgerHover={props.burgerHover} />
      </div>
    </div>
  );
}
