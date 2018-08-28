import PropTypes from 'prop-types'

const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
})

export default userShape
