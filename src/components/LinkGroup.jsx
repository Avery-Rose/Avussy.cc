import React from 'react';
import { Link, Tooltip } from '@nextui-org/react';
import {
  FaGithub,
  FaSteam,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa';

import '../styles/LinkGroup.css';
import { Text } from '@nextui-org/react';

export const LinkGroup = () => {
  // if mobile

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // deepscan-disable-next-line
    window.addEventListener('resize', () =>
      setIsMobile(window.innerWidth < 768)
    );

    return () =>
      // deepscan-disable-next-line
      window.removeEventListener('resize', () =>
        setIsMobile(window.innerWidth < 768)
      );
  }, []);

  return (
    <div className='link-group'>
      <Tooltip
        content={isMobile ? '' : 'Github'}
        placement='bottom'
        color='default'
      >
        <Link
          href='https://github.com/Avery-Rose'
          target='_blank'
          rel='noreferrer'
          className='link-item'
          color='primary'
        >
          <FaGithub size={50} />
          {isMobile && (
            <Text color='primary' h2>
              GitHub
            </Text>
          )}
        </Link>
      </Tooltip>
      <Tooltip
        content={isMobile ? '' : 'Steam'}
        placement='bottom'
        color='default'
      >
        <Link
          href='https://steamcommunity.com/id/cummyavery/'
          target='_blank'
          rel='noreferrer'
          className='link-item'
          color='primary'
        >
          <FaSteam size={50} />
          {isMobile && (
            <Text color='primary' h2>
              Steam
            </Text>
          )}
        </Link>
      </Tooltip>
      <Tooltip
        content={isMobile ? '' : 'Twitter'}
        placement='bottom'
        color='default'
      >
        <Link
          href='https://twitter.com/cattgirlava'
          target='_blank'
          rel='noreferrer'
          className='link-item'
          color='primary'
        >
          <FaTwitter size={50} />
          {isMobile && (
            <Text color='primary' h2>
              Twitter
            </Text>
          )}
        </Link>
      </Tooltip>
      <Tooltip
        content={isMobile ? '' : 'Instagram'}
        placement='bottom'
        color='default'
      >
        <Link
          href='https://www.instagram.com/cattgirlava/'
          target='_blank'
          rel='noreferrer'
          className='link-item'
          color='primary'
        >
          <FaInstagram size={50} />
          {isMobile && (
            <Text color='primary' h2>
              Instagram
            </Text>
          )}
        </Link>
      </Tooltip>
      <Tooltip
        content={isMobile ? '' : 'Discord'}
        placement='bottom'
        color='default'
      >
        <Link
          href='https://discord.gg/TzAZUDqfXh'
          className='link-item'
          color='primary'
        >
          <FaDiscord size={50} />
          {isMobile && (
            <Text color='primary' h2>
              Discord
            </Text>
          )}
        </Link>
      </Tooltip>
    </div>
  );
};
