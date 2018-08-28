import React from 'react'
import PropTypes from 'prop-types'

import userShape from '../logics/users/shape.js'
import './GroupCard.css'

import { Link } from 'react-router-dom'


export default function GroupCard({name, participants}) {
  return(
    <div className="group-card">
      <div className="group-name">{name}</div>
      {
        participants.map((p) =>
          <div className="group-participant" key={p.id}>
            <Link to={`/users/${p.id}`}>{p.username}</Link>: <span className="parts">{p.parts}</span>
          </div>
        )
      }
    </div>
  )
}

GroupCard.propTypes = {
  name: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(userShape).isRequired,
}
