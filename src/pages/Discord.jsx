import React from 'react';
import { Typography } from '@mui/material';

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
      <Typography>Redirecting...</Typography>
    </div>
  );
};

export default Discord;
