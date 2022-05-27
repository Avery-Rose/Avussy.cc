import React from 'react';

import { motion } from 'framer-motion';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';

import { FaGithub, FaSteam, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialLink({ link, children }) {
  return (
    <Grid item xs={12} sm={6} className='social'>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        {children}
      </a>
    </Grid>
  );
}

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
            <SocialLink link={'https://github.com/Averyyyyyyyy'}>
              <FaGithub className='icon' size={32} />
              Github
            </SocialLink>
            <SocialLink link={'https://steamcommunity.com/id/cummyavery/'}>
              <FaSteam className='icon' size={32} />
              Steam
            </SocialLink>
            <SocialLink link={'https://twitter.com/cattgirlava'}>
              <FaTwitter className='icon' size={32} />
              Twitter
            </SocialLink>
            <SocialLink link={'https://www.instagram.com/cattgirlava/'}>
              <FaInstagram className='icon' size={32} />
              Instagram
            </SocialLink>
          </Grid>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Home;
