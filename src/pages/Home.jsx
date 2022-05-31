import React from 'react';

import { motion } from 'framer-motion';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';

import { staggerContainer } from '../components/Varients';

import AnimatedCharacters from '../components/AnimatedCharacters';

import { FaGithub, FaSteam, FaTwitter, FaInstagram } from 'react-icons/fa';
import PageContainer from '../components/PageContainer';

function SocialLink({ link, children }) {
  return (
    <Grid item xs={12} sm={6} className='social'>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        {children}
      </a>
    </Grid>
  );
}

const SocialItem = (props) => {
  const [isHover, setHover] = React.useState(false);

  const placeholderText = [{ type: 'heading2', text: props.name }];

  return (
    <SocialLink link={props.link}>
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <motion.div
          initial='hidden'
          animate={isHover ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            width: 'fit-content',
          }}
        >
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </motion.div>
        {props.icon}
      </motion.div>
    </SocialLink>
  );
};

const Home = () => {
  return (
    <PageContainer>
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
          <SocialItem
            icon={<FaGithub className='icon' size={32} />}
            link={'https://github.com/Averyyyyyyyy'}
            name='Averyyyyyyyy'
          />

          <SocialItem
            icon={<FaSteam className='icon' size={32} />}
            link='https://steamcommunity.com/id/cummyavery/'
            name='Avery'
          />

          <SocialItem
            icon={<FaTwitter className='icon' size={32} />}
            link='https://twitter.com/cattgirlava'
            name='@CattGirlAva'
          />

          <SocialItem
            icon={<FaInstagram className='icon' size={32} />}
            link='https://www.instagram.com/cattgirlava/'
            name='@CattGirlAva'
          />
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Home;
