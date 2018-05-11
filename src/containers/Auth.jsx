import { connect } from 'react-redux'

import Auth from '../views/Auth'
import { AUTH, AUTH_ERROR } from '../logics/auth/actions'
// TODO: utils
import { act } from '../utils/action'

function mapDispatchToProps(dispatch) {
  return {
    onFailed: error => dispatch(act(AUTH_ERROR, error || "unknown error")),
    onResponse: json => dispatch(act(AUTH, json)),
  }
}

const AuthContainer = connect( state => { return state }, mapDispatchToProps)(Auth)
export default AuthContainer
