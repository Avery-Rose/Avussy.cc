import React from 'react';

import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

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
        <h1 className='gradient center'>Hello, my name is Avery</h1>
        <Typography className='center'>
          I{"'"}m currently a IT Student studying Web & Mobile Application
          Development.
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export default Home;
