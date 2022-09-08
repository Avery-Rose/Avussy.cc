import React from 'react';

import '../styles/Timeline.css';
import { TimeCard } from '../components/TimeCard';
import { timelines } from '../data/timeline';

const GetTimeline = () => {
  React.useEffect(() => {
    const cards = document.querySelectorAll('.timeline__card');

    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('animate-in', entry.isIntersecting);

        // animate in
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out');
        }

        // animate out
        if (!entry.isIntersecting) {
          entry.target.classList.remove('animate-in');
          entry.target.classList.add('animate-out');
        }
      });
    };
    const options = {
      threshold: 0,
    };
    const observer = new IntersectionObserver(intersectionCallback, options);

    cards.forEach((member) => {
      observer.observe(member);
    });
  }, []);

  return (
    <>
      {timelines.map((timeline, i) => {
        return (
          <TimeCard
            key={i}
            title={timeline.title}
            date={timeline.date}
            description={timeline.description}
          />
        );
      })}
    </>
  );
};

const Timeline = () => {
  return (
    <div className='content'>
      <div className='timeline'>
        <GetTimeline />
      </div>
    </div>
  );
};

export default Timeline;
