import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ props, children }) => {
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
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageContainer;
