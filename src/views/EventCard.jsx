import React from 'react'
import PropTypes from 'prop-types'
import './EventCard.css'

export default function Event({data, onDelete, onParticipate}) {
  if (! data.url || data.url === "")
  {
    data.url = "/#"
  }

  let participantsList
  if (!data.participants) {
    participantsList = <button onClick={()=>onParticipate(data.id, 1)}> Participate </button>
  } else {
    participantsList = data.participants.map(p => <li>{p}</li>)
    participantsList = <ul>{participantsList}</ul>
  }

  return (
    <div className="event">
      <div className="caption">
        <a className="link" href={data.url}>
          {data.name}
        </a>
        <button className="btn btn-danger" onClick={()=>onDelete(data.id)}>X</button>
      </div>
      <div className="price">{data.price}</div>
      <div className="date">{data.date}</div>
      <div className="authors">{data.author}</div>
      <div className="participants">
        {participantsList}
      </div>
      <div className="groups">{data.groups}</div>
    </div>
  )
}

// Requirements
let dataShape = PropTypes.shape({
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  participants: PropTypes.array,
  groups: PropTypes.array,
})

Event.propTypes = {
  data: dataShape.isRequired,
  onDelete: PropTypes.func,
  onParticipate: PropTypes.func,
}
