import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { EventsContext } from '../context/EventsContext';
import "./EventModal.css";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(20px);
  animation: slideUp 0.3s forwards;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items:flex-start;
  justify-content: center;
  @keyframes slideUp {
    to {
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const EventDetail = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
`;

const EventModal = ({ onClose, isEditable = false, event = {} }) => {
  const { addEvent } = useContext(EventsContext);
  const [eventData, setEventData] = useState({
    name: event.name || '',
    date: event.date || '',
    location: event.location || '',
    description: event.description || '',
    image: event.image || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditable) {
      addEvent(eventData); // Add the event to the context
    }
    onClose(); // Close the modal after saving
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>{isEditable ? 'Add New Event' : 'Event Details'}</Title>
        {isEditable ? (
          <form className='event-form' onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              value={eventData.name}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={eventData.location}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={eventData.description}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={eventData.image}
              onChange={handleChange}
            />
            <button className='event-form-button' type="submit">Add Event</button>
          </form>
        ) : (<>
          <span>
            <EventDetail><strong>Name:</strong> {event.name}</EventDetail>
            <EventDetail><strong>Date:</strong> {event.date}</EventDetail>
            <EventDetail><strong>Location:</strong> {event.location}</EventDetail>
            <EventDetail><strong>Description:</strong> {event.description}</EventDetail>
          </span>
            {event.image && <img src={event.image} alt={event.name} style={{ maxWidth: '100%', borderRadius: '5px' }} />}
        </>
        )}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </ModalContent>
    </ModalBackground>
  );
};

export default EventModal;
