import React from 'react';
import {HOST, PORT} from '../settings'

export default class Auth extends React.Component {
  constructor(props)
  {
    super(props)
  }

  send = ()=> {
    let data = new FormData(document.getElementById('auth-form'))
    fetch(`http://${HOST}:${PORT}/api/auth/`, { method: 'POST', body: data })
      .then(  (r) => console.log(r)   )
      .catch( (e) => console.error(e) )
  }

  render() {
    return  (
      <form className="auth-form">
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <button type="button" onClick={this.send}>log in</button>
      </form>
    )
  }
}
