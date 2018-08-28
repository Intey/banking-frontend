import PropTypes from 'prop-types'

import userShape from '../users/shape.js'

export function denormalize(state) {
  let { groups } = state;
  groups = groups.map((g) => denormalizeGroup(g, state.users))
  return groups
}

export function denormalizeGroup(group, users) {
    let {participants, ...rest} = group
    return {
      ...rest,
      participants: participants.map((p) => {
        let user = users.find((u) => u.id === p.account)
        if (!user)
          user = {id: p.account, user: { username: 'notfound'} }
        return {
          ...p,
          id: user.id, username: user.user.username,
        }
      })
    }
}


const shape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(userShape).isRequired,
})

export default shape
