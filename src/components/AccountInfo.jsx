import React from 'react';

import { Card, Container, Text } from '@nextui-org/react';

const AccountInfo = ({ user }) => {
  return (
    <Card
      hoverable
      shadow
      borderWeight='light'
      css={{
        width: 'fit-content',
        maxWidth: '700px',
      }}
    >
      {user !== null ? (
        <Container>
          <Text>Logged in as: {user?.preferred_username}</Text>
          <Text>email: {user?.email}</Text>
          <Text>
            Email is currently:{' '}
            {user.email_verified ? (
              <Text b color='success'>
                Verified
              </Text>
            ) : (
              <Text b color='error'>
                Waiting Verification
              </Text>
            )}
          </Text>
        </Container>
      ) : (
        <Container>
          <Text color='error'>Error fetching account info</Text>
        </Container>
      )}
    </Card>
  );
};

export default AccountInfo;
