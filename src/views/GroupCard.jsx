import React from 'react'
import PropTypes from 'prop-types'

import './GroupCard.css'

import { Link } from 'react-router-dom'


export default function GroupCard({name, participants}) {
  return(
    <div class="group-card">
      <div className="group-name">{name}</div>
      {
        participants.map((p) =>
          <div class="group-participant">
            <Link to={`/users/${p.account.id}`}>{p.account.username}</Link>: <span class="parts">{p.parts}</span>
          </div>
        )
      }
    </div>
  )
}

GroupCard.propTypes = {
  name: PropTypes.string.isRequired,
  participants: PropTypes.array
}
