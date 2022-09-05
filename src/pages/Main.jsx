import React from 'react';

import {
  Text,
  Row,
  Loading,
  Avatar,
  Container,
  Grid,
  Tooltip,
  Button,
} from '@nextui-org/react';
import { LinkGroup } from '../components/LinkGroup';

import '../styles/Main.css';

import fetch from 'node-fetch';

import { FiChevronDown } from 'react-icons/fi';

const Main = () => {
  const [result, setResult] = React.useState(null);

  const fetchData = () => {
    fetch('https://discord.com/api/guilds/1006583002517745674/widget.json')
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  };

  React.useEffect(() => {
    // refresh every 5 minutes
    const interval = setInterval(() => {
      fetchData();
    }, 300000);
    fetchData();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
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

        <FiChevronDown
          size={50}
          style={{
            position: 'absolute',
            bottom: '0px',
          }}
          className='no-mobile-display'
        />
      </section>
      <section id='discord'>
        <Container
          fluid
          css={{
            minWidth: '150px',
            minHeight: '150px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          {result ? (
            // itterate through the members array and display them
            <>
              <Grid.Container
                gap={2}
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text h2>{result.name}</Text>
              </Grid.Container>
              <Grid.Container
                gap={2}
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text h3>Online Members</Text>
              </Grid.Container>
              <Grid.Container
                gap={2}
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {result.members
                  .sort((a, b) => a.username.localeCompare(b.username))
                  .map((member) => {
                    let statusColor;
                    if (member.status === 'online') statusColor = 'success';
                    if (member.status === 'idle') statusColor = 'warning';
                    if (member.status === 'dnd') statusColor = 'error';
                    return (
                      <Tooltip
                        key={'tooltip_' + member.id}
                        content={
                          <Grid.Container>
                            <Row>
                              <Text b>{member.username}</Text>
                            </Row>
                          </Grid.Container>
                        }
                      >
                        <Avatar
                          key={'user_' + member.id}
                          src={member.avatar_url}
                          size='lg'
                          color={statusColor}
                          bordered
                          css={{
                            margin: '0.5rem',
                            transition: 'all 0.1s ease-in-out',
                            '&:hover': {
                              cursor: 'pointer',
                              filter: 'brightness(0.8)',
                            },
                          }}
                        />
                      </Tooltip>
                    );
                  })}
              </Grid.Container>
              <Button
                disabled={result.instant_invite === null}
                onClick={() => {
                  window.open(result.instant_invite);
                }}
                css={{
                  marginTop: '1rem',
                }}
              >
                JOIN
              </Button>
            </>
          ) : (
            <Container
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Loading />
              <Text h3>Fetching Discord Data</Text>
            </Container>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Main;
