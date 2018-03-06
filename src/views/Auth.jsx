import React from 'react';
import {HOST, PORT} from '../settings'

export default class Auth extends React.Component {
  send = ()=> {
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
      })
  }

  render() {
    return  (
      <form className="auth-form">
        <input id="username" type="text" name="username"/>
        <input id="password" type="password" name="password"/>
        <button type="button" onClick={this.send}>log in</button>
      </form>
    )
  }
}
