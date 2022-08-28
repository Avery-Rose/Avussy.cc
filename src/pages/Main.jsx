import React from 'react';

import { Text } from '@nextui-org/react';
import { LinkGroup } from '../components/LinkGroup';

import '../styles/Main.css';

const Main = () => {
  return (
    <div className='container'>
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
