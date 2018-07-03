import { connect } from 'react-redux'
import UserDetail from '../views/UserDetail.jsx'

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10)
  if (state.users.length === 0)
  {
    return { user: undefined } // should fetch one
  }
  else {
    let user = state.users.find( (e) => e.id === id )
    if (user === undefined)
      throw new Error(`impossible: can't go to user page with id ${ownProps.match.params.id}`)
    return { user: user }
  }
}


export default connect(mapStateToProps)(UserDetail)
