import React from 'react';
import './Header.css';
import Menu from '../containers/Menu'
import { Link } from 'react-router-dom'


export default function Header(props) {
  return (
    <header className="app-header">
      <h3><Link to='/'>Banking 01050-1</Link></h3>
      <div className="header-button">
        <Link to="/new">new</Link>
      </div>
      <Menu/>
    </header>
  )
}
