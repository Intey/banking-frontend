import React from 'react'

export default function Event({data, onClick}) {
  console.log("event", data)
  return (
    <div className="event">
      <div className="caption">{data.name}</div>
      <div className="price">{data.price}</div>
      <div className="authors">{data.authors}</div>
      <div className="participants">{data.participants}</div>
      <div className="groups">{data.groups}</div>
    </div>
  )
}
