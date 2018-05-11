import { connect } from 'react-redux'

import Auth from '../views/Auth'
import { authenticate } from '../logics/auth/actions.js'

function mapDispatchToProps(dispatch) {
  return {
    onAuth: (username, password) => dispatch(authenticate(username, password))
  }
}

function mapStateToProps(state) {
  if (state.error && state.error.auth)
    return { error: state.error.auth }
  else
    return { error: "" }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)
export default AuthContainer
