import React from 'react';
import {HOST, PORT} from '../settings'

export default class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
    }
  }

  send = ()=> {
    this.setState({error: false})
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    fetch(`http://${HOST}:${PORT}/api/auth/`,
      {
        method: 'POST',
        body: JSON.stringify({'username': username, 'password': password }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    )
      .then( r => r.json() )
      .then( json => {
        if (json.token) this.props.onResponse(json)
        else throw json // error
      })
      .catch( e => {
        this.props.onFailed(e)
        console.warn(e)
        this.setState({error: e})
      })
  }

  render() {
    let errorView = (
      this.state.error ?
      <p className="error">{this.state.error}</p>
      :
      null
    )

    return  (
      <form className="auth-form">
        <input id="username" type="text" name="username"/>
        <input id="password" type="password" name="password"/>
        <button type="button" onClick={this.send}>log in</button>
        {errorView}
      </form>
    )
  }
}
