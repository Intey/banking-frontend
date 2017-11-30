import React from 'react'

import Event from './Event'
import './EventsList.css'

const EventsList = ({ events, onClick }) => {
  console.log('View/EventList: events', events)
  if (events)
  {
    return (
      <div className="events-list">
        {events.map( (e, id) => {
          if (!e.private)
            return <Event key={id} data={e} onClick={onClick}/>
          else 
            return null
        })}
      </div>
    )
  }
  else
  {
    return (<div className="events-list">No events</div>)
  }

}

export default EventsList
