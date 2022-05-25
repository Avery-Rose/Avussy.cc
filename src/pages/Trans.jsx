import React from 'react';

import '../styles/page.css';

import { motion } from 'framer-motion';
import { Typography, Container } from '@mui/material';

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
        {/* How to have a period */}
        <Container
          style={{
            paddingTop: '5rem',
          }}
        >
          <div className='split'>
            <Container>
              <h1>How to have a period.</h1>
              <Typography>
                <ol>
                  <li>
                    Find a toothbrush that you mostlikley have lying around.
                  </li>
                  <li>
                    Now that you have a toothbrush, you can insert it inside of
                    your anus.
                  </li>
                  <li>
                    Now, take the toothbrush and brush the inside of your anus
                    until you feel a little bit of pain.
                  </li>
                  <li>
                    When you start bleeding take the toothbrush out and insert a
                    tampon to stop the bleeding.
                  </li>
                  <li>Now, Repeat this process for 3 days.</li>
                </ol>
              </Typography>
            </Container>

            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f8/Gestion_menstrual_tampon_toallitas_menstruaci%C3%B3n_periodicas_06.jpg'></img>
          </div>
          <Container>
            <h2>Story Time</h2>
            <Typography>
              It{"'"}s just as I{"'"}m having a period. There{"'"}s just
              something about menstruation that makes me feel so empowered and
              feminine. sometimes when I{"'"}m in the menstruation aisle at the
              store, I see girls buying pads. I give them a smile every time
              knowning that we are apart of a sisterhood.
            </Typography>
          </Container>
        </Container>
        {/* How to properly groom your gock */}
        <Container justify='space-around' fluid>
          <Container
            style={{
              paddingTop: '5rem',
            }}
          >
            <h1>THE LAWN MOWER® 4.0</h1>
            <Typography>
              Replaceable ceramic blades featuring SkinSafe™ technology are set
              back from the edge 3mm and precision-engineered for maximum
              confidence while trimming below-the-waist.{' '}
            </Typography>
            <Typography>
              Visit{' '}
              <a
                href='https://www.manscaped.com/'
                target={'_blank'}
                rel='noopener noreferrer'
              >
                Manscaped™
              </a>{' '}
              today, take care of your lawn and get the most out of your gock.
            </Typography>
            <Typography
              style={{
                opacity: 0.5,
              }}
            >
              SkinSafe™ technology does not guarantee cut protection.
            </Typography>
            <Container
              style={{
                paddingTop: '2rem',
                paddingBottom: '2rem',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 500,
                  transition: { duration: 0.5, delay: 0 },
                }}
                transition={{
                  type: 'spring',
                  delay: 0.5,
                  stiffness: (100 * window.innerWidth) / 1920,
                }}
                id='youtube-container'
                style={{
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                }}
              >
                <iframe
                  src='https://www.youtube.com/embed/glh-CjX3DiM?controls=0'
                  title='Manscape'
                  allowFullScreen
                  frameBorder='0'
                  allow='autoplay; encrypted-media; picture-in-picture; fullscreen'
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </motion.div>
            </Container>
          </Container>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Trans;
