import React from 'react'
import PropTypes from 'prop-types'
import UserCard from './UserCard.jsx'

import './UserList.css'

export default function UserList(props) {
  return (
    <React.Fragment>
      {props.users.map( (user) => <UserCard {...user} key={user.id}/>)}
    </React.Fragment>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}
