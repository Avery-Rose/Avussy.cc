import { Typography } from '@mui/material';
import React from 'react';
import PageContainer from '../components/PageContainer';
import TabProvider from '../components/TabProvider';

const Voice = () => {
  const tabs = [
    {
      label: 'The Rainbow Passage',
      content: (
        <div style={{
          width: '80vw',
        }}>
          <Typography variant='body1' gutterBottom component='div'>
            When sunlight strikes raindrops in the air, they act like a prism
            and form a rainbow. The rainbow is a division of white light into
            many beautiful colors. These take the shape of a long round arch,
            with its path high above, and its two ends apparently beyond the
            horizon. There is, according to legend, a boiling pot of gold at one
            end. People look but no one ever finds it. When a man looks for
            something beyond his reach, his friends say he is looking for the
            pot of gold at the end of the rainbow.
          </Typography>
          <br />
          <Typography variant='body1' gutterBottom component='div'>
            Throughout the centuries men have explained the rainbow in various
            ways. Some have accepted it as a miracle without physical
            explanation. To the Hebrews it was a token that there would be no
            more universal floods.
          </Typography>
          <br />
          <Typography variant='body1' gutterBottom component='div'>
            The Greeks used to imagine that it was a sign from the gods to
            foretell war or heavy rain. The Norsemen considered the rainbow as a
            bridge over which the gods passed from the earth to their home in
            the sky. Other men have tried to explain the phenomenon physically.
            Aristotle thought that the rainbow was caused by reflection of the
            sun
            {"'"}s rays by the rain. Since then physicists have found that it is
            not the reflection, but refraction by the raindrops which causes the
            rainbow. Many complicated ideas about the rainbow have been formed.
            The difference in the rainbow depends considerably upon the size of
            the water drops, and the width of the colored band increases as the
            size of the drops increases.
          </Typography>
          <br />
          <Typography variant='body1' gutterBottom component='div'>
            The actual primary rainbow observed is said to be the effect of
            superposition of a number of bows. If the red of the second bow
            falls upon the green of the first, the result is to give a bow with
            an abnormally wide yellow band, since red and green light when mixed
            form yellow. This is a very common type of bow, one showing mainly
            red and yellow, with little or no green or blue.
          </Typography>
          <br />
          <Typography variant='subtitle2' gutterBottom component='div'>
            <em>The Rainbow Passage</em>, a public-domain text, can be found on
            page 127 of the 2nd edition of Grant Fairbanks{"'"}{' '}
            <em>Voice and Articulation Drillbook</em>. New York: Harper &amp;
            Row.
          </Typography>
        </div>
      ),
    },
    {
      label: 'The Grandfather Passage',
      content: (
        <div style={{
          width: '80vw',
        }}>
          <Typography variant='body1' gutterBottom component='div'>
            You wished to know all about my grandfather. Well, he is nearly
            ninety-three years old. He dresses himself in an ancient black frock
            coat, usually minus several buttons; yet he still thinks as swiftly
            as ever. A long, flowing beard clings to his chin, giving those who
            observe him a pronounced feeling of the utmost respect. When he
            speaks his voice is just a bit cracked and quivers a trifle. Twice
            each day he plays skillfully and with zest upon our small organ.
            Except in the winter when the ooze or snow or ice prevents, he
            slowly takes a short walk in the open air each day. We have often
            urged him to walk more and smoke less, but he always answers,
            “Banana Oil!” Grandfather likes to be modern in his language.
          </Typography>
        </div>
      ),
    },
    {
      label: 'Sun and Moon',
      content: (
        <div
        style={{
          width: '80vw',
          textAlign: 'center'
        }}
        >
          <Typography variant='body1' component='div'>
            Come driving rain or winds that churn
          </Typography>
          <Typography variant='body1' component='div'>
            I shall return, by blade alone
          </Typography>
          <Typography variant='body1' component='div'>
            Armed, if barefoot,
          </Typography>
          <Typography variant='body1' component='div'>
            To my home.
          </Typography>
          <Typography variant='body1' component='div'>
            On this mountain path,
          </Typography>
          <Typography variant='body1' component='div'>
            where the red leaves lifeless lie,
          </Typography>
          <Typography variant='body1' component='div'>
            My heart calls for a companion
          </Typography>
          <Typography variant='body1' component='div'>
            Echoing the deer{"'"}s cry
          </Typography>
          <Typography variant='body1' component='div'>
            Sun and moon rejoice
          </Typography>
          <Typography variant='body1' component='div'>
            Birds of dawn sign songs anew.
          </Typography>
          <Typography variant='body1' component='div'>
            Far from home
          </Typography>
          <Typography variant='body1' component='div'>
            With you.
          </Typography>
        </div>
      ),
    },
  ];

  return (
    <PageContainer>
      <Typography
        variant='h1'
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
        }}
      >
        Voice Training Scripts
      </Typography>
      <div style={{ paddingBottom: '10px' }}></div>
      <TabProvider tabs={tabs} />
      <div style={{ paddingBottom: '75px' }}></div>
    </PageContainer>
  );
};

export default Voice;
