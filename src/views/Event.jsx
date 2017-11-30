import React from 'react'
import './Event.css'

export default function Event({data, onClick}) {
  console.log("event", data)
  if (! data.url || data.url === "")
  {
    data.url = "/#"
  }
  return (
    <div className="event">
      <div className="caption">
        <a className="link" href={data.url}>
          {data.name}
        </a>
      </div>
      <div className="price">{data.price}</div>
      <div className="date">{data.date}</div>
      <div className="authors">{data.author}</div>
      <div className="participants">{data.participants}</div>
      <div className="groups">{data.groups}</div>
    </div>
  )
}
