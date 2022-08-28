import React from 'react';
import { Text } from '@nextui-org/react';

const Discord = () => {
  const redirect = () => {
    document.location.href = 'https://discord.gg/TzAZUDqfXh';
  };

  React.useEffect(() => {
    redirect();
  }, []);

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
      <Text>Redirecting...</Text>
    </div>
  );
};

export default Discord;
