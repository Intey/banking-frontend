import React from 'react'
import PropTypes from 'prop-types'

import GroupCard from './GroupCard.jsx'

import './GroupList.css'

export default function GroupList({ groups }) {
  if (!groups)
    return <span>No groups found</span>
  return (
    <div class="groups">
      { groups.map((g) => <GroupCard {...g}/>)}
    </div>
  )
}

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
}
