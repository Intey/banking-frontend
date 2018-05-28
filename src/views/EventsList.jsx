import React from 'react'
import PropTypes from 'prop-types'

import Event from './EventCard.jsx'
import './EventsList.css'

export default function EventsList({ events, onDelete, onParticipate, currentUser}) {
  // console.log('View/EventList: events', events)
  if (events)
  {
    return (
      <div className="events-list">
        {events.map( (e, id) => {
          if (!e.private)
            return <Event key={id} data={e} onDelete={onDelete} onParticipate={onParticipate} currentUser={currentUser}/>
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

EventsList.propTypes = {
  events: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onParticipate: PropTypes.func.isRequired
}
