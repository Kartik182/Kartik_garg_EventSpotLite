import React, { useState } from 'react';
import styled from '@emotion/styled';
import EventModal from './EventModal'; // Ensure this import is correct

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEventClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Nav>
      <div>EventSpot Lite</div>
      <button onClick={handleAddEventClick} className="add-event-button">+</button>
      {isModalOpen && <EventModal onClose={handleCloseModal} isEditable={true} />}
    </Nav>
  );
};

export default Navbar;
