import React from 'react';
import { motion } from 'framer-motion';
import { menu } from './Varients';
import { generateLinks, links } from './links';

export function BurgerItem(props) {
  return (
    <motion.div
      className='burger-menu'
      variants={menu}
      initial='hidden'
      animate={props.isOpen ? 'visible' : 'hidden'}
      exit={'hidden'}
      style={{
        overflow: 'auto',
      }}
    >
      {generateLinks(links, props.isMobile)}
    </motion.div>
  );
}
