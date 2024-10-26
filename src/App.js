import React from 'react';
import { EventsProvider } from './context/EventsContext';
import EventList from './components/EventList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <EventsProvider>
      <Navbar />
      <EventList />
    </EventsProvider>
  );
}

export default App;
