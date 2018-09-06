import React from 'react'
import PropTypes from 'prop-types'
import userShape from '../logics/users/shape'

export default function ProfilePage(props) {
  return <h1>{props.user.username}</h1>
}

ProfilePage.propTypes = {
  user: userShape.isRequired
}
