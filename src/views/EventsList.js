import React from 'react'

import Event from './Event.js'

const EventsList = ({ events, onClick }) => {
  console.log('events', events)
  if (events)
  {
    return (
      <div className="events-list">
        {events.map( (e, id) => (
          <Event key={id} data={e} onClick={onClick}/>
        ))}
      </div>
    )
  }
  else
  {
    return (<div className="events-list">No events</div>)
  }

}

export default EventsList
