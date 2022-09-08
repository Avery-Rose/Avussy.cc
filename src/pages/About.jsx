import React from 'react';
import { Text } from '@nextui-org/react';
import { LinkGroup } from '../components/LinkGroup';

const About = (props) => {
  return (
    <section id='main'>
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
    </section>
  );
};

export default About;
