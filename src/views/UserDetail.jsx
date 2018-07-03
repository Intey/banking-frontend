import React from 'react'
import PropTypes from 'prop-types'

export default function UserDetail({ user }) {
  return <span>{JSON.stringify(user)}</span>
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired
}
