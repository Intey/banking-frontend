import React from 'react'

const Event = (data, onClick) => (
  <div class="event">
    <div class="caption">{data.caption}</div>
    <div class="price">{data.price}</div>
    <div class="authors">{data.authors}</div>
    <div class="participants">{data.participants}</div>
    <div class="groups">{data.groups}</div>
  </div>
)

export default Event
