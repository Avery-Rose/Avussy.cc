import React from 'react';

import { Text } from '@nextui-org/react';
import { LinkGroup } from '../components/LinkGroup';

const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        gap: '1rem',
      }}
    >
      <Text
        h1
        style={{
          maxWidth: '800px',
          textAlign: 'center',
        }}
      >
        Hi, I{"'"}m Avery
      </Text>

      <LinkGroup />
    </div>
  );
};

export default Main;
