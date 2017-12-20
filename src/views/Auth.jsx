import React from 'react';
import {HOST, PORT} from '../settings'

export default class Auth extends React.Component {
  constructor(props)
  {
    super(props)
  }

  send = ()=> {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    console.log(username, password);
    fetch(`http://${HOST}:${PORT}/api/auth/`,
      {
        method: 'POST',
        body: JSON.stringify({'username': username, 'password': password }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    )
      .then(  (r) => console.log(r)   )
      .catch( (e) => console.error(e) )
  }

  render() {
    return  (
      <form className="auth-form">
        <input Id="username" type="text" name="username"/>
        <input Id="password" type="password" name="password"/>
        <button type="button" onClick={this.send}>log in</button>
      </form>
    )
  }
}
