import React from 'react';

import '../styles/Timeline.css';
import { TimeCard } from '../components/TimeCard';
import { timelines } from '../data/timeline';

import { sortDates } from '../utils/sortDate';

const GetTimeline = () => {
  const sortedTimeline = sortDates(timelines);

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
      {sortedTimeline.map((timeline, index) => {
        return (
          <TimeCard
            key={index}
            title={timeline.title}
            description={timeline.description}
            date={timeline.date}
            image={timeline.image}
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
