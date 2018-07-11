import React from 'react'
import PropTypes from 'prop-types'

export default function GroupCard({name, participants}) {
  return(
    <div class="group">
      <h1>{name}</h1>
      {
        participants.map((p) =>
          <div class="participant">
            <div class="name">
              {p.account}
            </div>
            <div class="parts">{p.parts}</div>
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
