import React from 'react';
import styled from '@emotion/styled';
import './EventCard.css'



const EventCard = ({ event, onClick }) => (

  <div class="ag-format-container" >
  <div class="ag-courses_box" >
    <div class="ag-courses_item" onClick={()=>{
    onClick(event)
  }}>
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          {event.name}
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            {event.date}
          </span>
        </div>
      </a>
    </div>


  </div>
</div>
);

export default EventCard;
