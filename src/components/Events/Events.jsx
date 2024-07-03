import React, { useState, useEffect } from 'react';
import './Events.css'; 


const events = [
  {
    title: 'Tech Conference 2024',
    description: 'An annual tech conference with the latest in technology and innovation.',
    image: '/event1.jpg'
  },
  {
    title: 'Sports Event 2024',
    description: 'An exciting sports event showcasing the best athletic talents.',
    image: '/event2.jpg'
  },
  {
    title: 'Science Fair 2024',
    description: 'A fair where students display their scientific projects and experiments.',
    image: '/event3.jpg'
  },
  {
    title: 'Music Festival 2024',
    description: 'A festival celebrating music with performances from various artists.',
    image: '/event4.jpg'
  },
  {
    title: 'Art Exhibition 2024',
    description: 'An exhibition displaying artworks from talented artists.',
    image: '/event5.jpg'
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % events.length);
    }, 5000); // Change event every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
      <h2>Events</h2>
      <div className="event">
        <img src={events[currentEvent].image} alt={events[currentEvent].title} className="event-image" />
        <h3>{events[currentEvent].title}</h3>
        <p>{events[currentEvent].description}</p>
      </div>
    </div>
  );
};

export default Events;
