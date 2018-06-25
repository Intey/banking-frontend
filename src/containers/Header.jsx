import { connect } from 'react-redux'

import Header from '../views/Header.jsx'

import { LOG_OUT } from '../logics/auth/actions.js'
import { act } from '../utils/action.js'


function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(act(LOG_OUT))
  }
}

const HeaderContainer = connect(()=> { return {} }, mapDispatchToProps)(Header)
export default HeaderContainer
