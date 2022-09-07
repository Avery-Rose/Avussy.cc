import React from 'react';
import { Text } from '@nextui-org/react';

const Discord = () => {
  const [inviteLink, setInviteLink] = React.useState(null);

  const guildID = '1006583002517745674';
  const url = `https://discord.com/api/guilds/${guildID}/widget.json`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setInviteLink(data.instant_invite);
    });

  React.useEffect(() => {
    if (inviteLink) {
      window.location.href = inviteLink;
    }
  }, [inviteLink]);

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
