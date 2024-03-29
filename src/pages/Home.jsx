import React from 'react';

import {
  Text,
  Loading,
  Container,
  Grid,
  Link,
  Spacer,
} from '@nextui-org/react';

import '../styles/Main.css';

import fetch from 'node-fetch';

import { Members } from '../components/Members';

const Home = () => {
  const [result, setResult] = React.useState(null);

  const guildID = '1006583002517745674';
  const url = `https://discord.com/api/guilds/${guildID}/widget.json`;

  const fetchData = () => {
    fetch(url)
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

  // observer

  React.useEffect(() => {
    const members = document.querySelectorAll('.member');
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    };
    const options = {
      threshold: 1,
    };
    const observer = new IntersectionObserver(intersectionCallback, options);

    members.forEach((member) => {
      observer.observe(member);
    });

    return () => {
      members.forEach((member) => {
        observer.unobserve(member);
      });
    };
  }, [result]);

  return (
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
                flexDirection: 'column',
              }}
            >
              <Text
                h2
                css={{
                  textAlign: 'center',
                }}
              >
                <Link target='_blank' href={result.instant_invite}>
                  {result.name}
                </Link>
              </Text>
            </Grid.Container>
            <Grid.Container
              gap={2}
              css={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Text
                h3
                css={{
                  textAlign: 'center',
                }}
              >
                Online Members
              </Text>
            </Grid.Container>
            <Grid.Container
              css={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Members result={result}></Members>
              <Spacer y={1} />
              <Link href={result.instant_invite}>JOIN</Link>
            </Grid.Container>
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
            <Spacer />
            <Text h3>Fetching Discord Data...</Text>
          </Container>
        )}
      </Container>
    </section>
  );
};

export default Home;
