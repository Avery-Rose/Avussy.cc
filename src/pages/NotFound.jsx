import React from 'react';

import { motion } from 'framer-motion';

import { Container } from '@mui/material';

const NotFound = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className='content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Container>
          <motion.h1
            className='gradient center'
            initial={{ opacity: 0 }}
            animate={{
              opacity: [1, 0.5],
            }}
            drag
            dragSnapToOrigin
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
            }}
            style={{
              fontSize: '5rem',
            }}
          >
            404
          </motion.h1>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
