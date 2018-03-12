import React from 'react'
import './Builder.css'

export default function(props) {
  return (
    <div className="event">
      <input className="caption"      name="caption"      value="" placeholder="event name"/>
      <input className="price"        name="price"        value="" placeholder="price"/>
      <input className="date"         name="date"         value="" placeholder="date"/>
      <input className="authors"      name="authors"      value="" placeholder="authors"/>
      <input className="participants" name="participants" value="" placeholder="participants"/>
      <input className="groups"       name="groups"       value="" placeholder="groups"/>
    </div>
  )

}
