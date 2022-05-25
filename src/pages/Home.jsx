import React from 'react';

import { motion } from 'framer-motion';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';

import { FaGithub, FaSteam, FaTwitter, FaInstagram } from 'react-icons/fa';

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
        <Container
          style={{
            paddingTop: '5rem',
          }}
        >
          <h1 className='gradient center'>Hello, my name is Avery</h1>
          <Typography className='center'>
            I{"'"}m currently a IT Student studying Web & Mobile Application
            Development.
          </Typography>
          <Grid container spacing={3} className='socials'>
            <Grid item xs={12} sm={6} className='social'>
              <a
                href='https://github.com/Averyyyyyyyy'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FaGithub className='icon' size={32} />
                Github
              </a>
            </Grid>
            <Grid item xs={12} sm={6} className='social'>
              <a
                href='https://steamcommunity.com/id/cummyavery/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FaSteam className='icon' size={32} />
                Steam
              </a>
            </Grid>
            <Grid item xs={12} sm={6} className='social'>
              <a
                href='https://twitter.com/cattgirlava'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FaTwitter className='icon' size={32} />
                Twitter
              </a>
            </Grid>
            <Grid item xs={12} sm={6} className='social'>
              <a
                href='https://instagram.com/cattgirlava'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FaInstagram className='icon' size={32} />
                Instagram
              </a>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Home;
