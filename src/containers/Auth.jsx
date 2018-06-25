import { connect } from 'react-redux'

import Auth from '../views/Auth'
import { authenticate } from '../logics/auth/actions.js'

function mapDispatchToProps(dispatch) {
  return {
    onAuth: (username, password) => dispatch(authenticate(username, password))
  }
}

function mapStateToProps(state) {
  let errors = state.errors.auth || []
  return { errors }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)
export default AuthContainer
