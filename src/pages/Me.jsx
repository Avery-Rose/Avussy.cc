import React from 'react';
import { Text } from '@nextui-org/react';
import { LinkGroup } from '../components/LinkGroup';

import { motion } from 'framer-motion';

const Me = (props) => {
  return (
    <motion.div
      className='container'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <section id='main'>
        <Text
          h1
          style={{
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          Hi, I{"'"}m Avery
        </Text>

        <LinkGroup />
      </section>
    </motion.div>
  );
};

export default Me;
