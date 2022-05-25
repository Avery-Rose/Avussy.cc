import React from 'react';

import { motion } from 'framer-motion';

import { Card } from '@nextui-org/react';

const Home = () => {
  return (
    <motion.div className='page'>
      <motion.div
        className='content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Card
          shadow
          hoverable
          css={{
            marginTop: '2rem',
          }}
        >
          <h2
            style={{
              color: '#FFA3EE',
            }}
          >
            Hello, my name is Avery
          </h2>
          <br />
          <p>
            I{"'"}m 19 years of age. I like to code and plan to go into the
            field. Currently I am focusing on frontend development and design.
            This website is going to be a project that I can practice on.
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Home;
