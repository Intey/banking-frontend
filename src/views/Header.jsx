import React from 'react';
import './Header.css';
import Menu from '../containers/Menu'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'


function Header(props) {
  console.log(props)
  return (
    <header className="app-header">
      <button onClick={props.history.goBack}>&lt;-</button>
      <h3><Link to='/'>Banking 01050-1</Link></h3>
      <div className="header-button">
        <Link to="/new">new</Link>
      </div>
      <Menu/>
    </header>
  )
}

const HeaderRouted = withRouter(Header);
export default HeaderRouted
