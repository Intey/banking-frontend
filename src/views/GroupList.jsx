import React from 'react'
import PropTypes from 'prop-types'

import GroupCard from './GroupCard.jsx'
import GroupEditCard from './GroupEditCard.jsx'

import './GroupList.css'

export default function GroupList({ groups }) {
  if (!groups)
    return <span>No groups found</span>
  return (
    <div className="group-list">
      { groups.map((g) => <GroupCard key={g.id} {...g}/>)}
      <GroupEditCard/>
    </div>
  )
}

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
}
