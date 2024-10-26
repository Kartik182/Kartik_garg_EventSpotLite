import React, { createContext, useState } from 'react';

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([{
    id: 1,
    name: 'Tech Conference 2023',
    date: '2023-11-15',
    location: 'bengaluru',
    description: 'A conference about the latest in tech.',
    image: 'https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg'
  },
  {
    id: 2,
    name: 'Art Expo',
    date: '2023-12-01',
    location: 'Delhi',
    description: 'An exhibition showcasing modern art.',
    image: 'https://files.guidedanmark.org/files/415/174713_Galleri_Art_Expo.jpg'
  },
  {
    id: 3,
    name: 'Music Festival',
    date: '2023-10-20',
    location: 'bengaluru',
    description: 'A festival featuring live music performances.',
    image: 'https://img.freepik.com/premium-photo/confetti-fireworks-crowd-music-festival_989072-16.jpg'
  }]); 

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};
