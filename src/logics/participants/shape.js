import PropTypes from 'prop-types'
const idShape = PropTypes.number.isRequired


const shape = PropTypes.shape({
  id: idShape,
  account: PropTypes.shape({
    id: idShape,
    username: PropTypes.string.isRequired,
  }).isRequired,
})

export default shape

