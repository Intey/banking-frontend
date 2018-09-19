import React from 'react'
import PropTypes from 'prop-types'

import GroupCard from './GroupCard.jsx'
import GroupEditCard from './GroupEditCard.jsx'
import userShape from '../logics/users/shape.js'

import './GroupList.css'

export default function GroupList({ groups, users, onCreateGroup }) {
  if (!groups)
    return <span>No groups found</span>
  return (
    <div className="group-list">
      <GroupEditCard users={users} onCreateGroup={onCreateGroup}/>
      { groups.map((g) => <GroupCard key={g.id} {...g}/>)}
    </div>
  )
}

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
  users: PropTypes.arrayOf(userShape).isRequired,
  onCreateGroup: PropTypes.func.isRequired,
}
