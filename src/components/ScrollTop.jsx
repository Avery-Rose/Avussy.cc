import React from 'react';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';
import { Fab } from '@mui/material';

export function ScrollTop(props) {
  return (
    <motion.div
      className='scroll-top'
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      initial={{
        scale: 0,
      }}
      animate={{
        scale: props.showScrollTop ? 1 : 0,
      }}
      transition={
        props.showScrollTop
          ? {
              type: 'spring',
              stiffness: 100,
            }
          : {
              duration: 0.2,
            }
      }
    >
      <Fab className='scroll-top-icon' aria-label='go top' color='primary'>
        <UpIcon />
      </Fab>
    </motion.div>
  );
}
