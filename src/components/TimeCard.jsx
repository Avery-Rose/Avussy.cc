import React from 'react';
import { Container, Text } from '@nextui-org/react';

export const TimeCard = (props) => {
  const { title, date, description, image } = props;

  // add class name to image component

  return (
    <Container
      className='timeline__card'
      css={{
        maxWidth: '800px',
      }}
    >
      <div className='timeline__card__header'>
        <Text h3>{title}</Text>
      </div>
      <div className='timeline__card__divider' />
      <div className='timeline__card__body'>
        <div className='timeline__card__body__text'>
          <Text>{date}</Text>
          <Text>{description}</Text>
        </div>
        {image}
      </div>
    </Container>
  );
};
