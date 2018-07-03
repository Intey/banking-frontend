import React from 'react'
import PropTypes from 'prop-types'
import './UserCard.css'

import { Link } from 'react-router-dom'

export default function UserCard(props) {
  return (
    <div className="user-card">
      <Link to={`/users/${props.id}`}>
        <h3 className={`username ${props.isAdmin? "user-admin": ""}`}>
          {props.username}(<span className="rate">{props.rate}</span>)
        </h3>
      </Link>
      <span className="balance">balance: {props.balance}</span>
    </div>
  )
}

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  balance: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}
