import React from 'react';
import { motion } from 'framer-motion';

const Trans = () => {
  function genWords() {
    const arr = [];

    for (let i = 0; i < 15; i++) {
      arr.push(
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          explicabo accusantium necessitatibus voluptate iste eum mollitia odio
          molestiae, esse asperiores in veniam consequuntur atque fugiat
          repellendus. In mollitia ipsa nobis?
        </p>
      );
    }

    return arr;
  }

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
        <h1>Trans</h1>
        {genWords()}
      </motion.div>
    </motion.div>
  );
};

export default Trans;
