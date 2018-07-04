import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import UserCard from './UserCard.jsx'

import './UserList.css'

export default function UserList(props) {
  return (
    <React.Fragment>
      <button>
        <Link className="link" to="/new-user">Create new</Link>
      </button>
      {props.users.map( (user) => <UserCard {...user} key={user.id}/>)}
    </React.Fragment>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}
