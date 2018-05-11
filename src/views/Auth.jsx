import React from 'react';
import PropTypes from 'prop-types'

export default class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: this.props.error,
      username: "",
      password: ""
    }
  }
  onChangeName = (e) => { this.setState({username: e.target.value}) }
  onChangePass = (e) => { this.setState({password: e.target.value}) }

  send = ()=> {
    this.setState({error: ""})
    this.props.onAuth(this.state.username, this.state.password)
  }

  render() {
    let errorView = (
      this.state.error !== "" ?
      <p className="error">{this.state.error}</p>
      :
      null
    )

    return  (
      <form className="auth-form">
        <input id="username" type="text" name="username"
          value={this.state.username} onChange={this.onChangeName}/>
        <input id="password" type="password" name="password"
         value={this.state.password} onChange={this.onChangePass}/>
        <button type="button" onClick={this.send}>log in</button>
        {errorView}
      </form>
    )
  }
}

Auth.propTypes = {
  onAuth: PropTypes.func.isRequired
}
