import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Tabs, Tab, TabPanel, Typography } from '@mui/material';

const Trans = () => {
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
        <h1 className='gradient center'>Welcome to the Trans experience</h1>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='How to have your first period' />
        </Tabs>
        <TabPanel value={value} index={0}>
          Find a toothbrush that you mostlikley have lying around. Now that you
          have a toothbrush, you can insert it inside of your anus. Now, take
          the toothbrush and brush the inside of your anus until you feel a
          little bit of pain. When you start bleeding take the toothbrush out
          and insert a tampon to stop the bleeding. Now, Repeat this process for
          3 days.
        </TabPanel>
      </motion.div>
    </motion.div>
  );
};

export default Trans;
