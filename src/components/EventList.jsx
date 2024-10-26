import React, { useState, useContext } from "react";
import { EventsContext } from '../context/EventsContext';
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import "./EventList.css";

const EventList = () => {
  const { events } = useContext(EventsContext);
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  // Get unique locations from events
  const uniqueLocations = [...new Set(events.map(event => event.location))];

  // Filter events based on search and selected location
  const filteredEvents = events.filter(
    (event) =>
      (event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())) &&
      (selectedLocation === "" || event.location === selectedLocation)
  );

  return (
    <div className="event-list">
      <h1>EventList</h1>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="location-filter">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        

      </div>
      <div className="event-grid-wrapper">
        <div className="event-grid">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => {
                setSelectedEvent(event);
              }}
            />
          ))}
        </div>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default EventList;
