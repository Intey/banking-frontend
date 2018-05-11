import React from 'react'

import Event from './EventCard.jsx'
import './EventsList.css'

const EventsList = ({ events, onDelete, onParticipate}) => {
  // console.log('View/EventList: events', events)
  if (events)
  {
    return (
      <div className="events-list">
        {events.map( (e, id) => {
          if (!e.private)
            return <Event key={id} data={e} onDelete={onDelete} onParticipate={onParticipate}/>
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
