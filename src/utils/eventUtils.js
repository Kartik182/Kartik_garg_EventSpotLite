import events from '../data/events.json';
import fs from 'fs'; // Node.js file system module

export const saveEvent = (newEvent) => {
  const updatedEvents = [...events, newEvent];
  fs.writeFileSync('src/data/events.json', JSON.stringify(updatedEvents, null, 2));
};
