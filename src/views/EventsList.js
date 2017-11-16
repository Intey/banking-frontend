import React from 'react'

import Event from './Event.js'

const EventsList = ({ events, onClick }) => (
  <div class="events-list">
    {events.map( e => (
      <Event data={e} onClick={onClick}/>
    ))}
  </div>
)

export default EventsList
