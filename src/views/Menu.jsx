import React from 'react'

import './Menu.css'

export default function Menu(props) {
  return (
    <div className={"menu " + (props.shown? "shown": "hidden") }>
      <ul className="items">
        <li className="item">Sort by date</li>
        <li className="item">Sort by Name</li>
        <li className="item">Filter by type</li>
      </ul>
    </div>
  )
}
