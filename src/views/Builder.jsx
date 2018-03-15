import React from 'react'
import './Builder.css'

export default function(props) {
  return (
    <div className="event">
      <input className="event-caption"      name="caption"      value="" placeholder="event name"/>
      <input className="event-price"        name="price"        value="" placeholder="price"/>
      <input className="event-date"         name="date"         value="" placeholder="date"/>
      <input className="event-authors"      name="authors"      value="" placeholder="authors"/>
      <input className="event-participants" name="participants" value="" placeholder="participants"/>
      <input className="event-groups"       name="groups"       value="" placeholder="groups"/>
    </div>
  )

}
