import PropTypes from 'prop-types'

const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
})


/**
 * Convert User shape from server
 */
export function denormalizeUser(user) {
  return {
    username: user.user.username,
    isAdmin: user.user.is_superuser,
    balance: user.balance,
    rate: user.rate,
    id: user.id
  }
}

export default userShape
