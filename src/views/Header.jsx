import React from 'react';
import './Header.css';
import Menu from './Menu'


export default function Header(props) {
  return (
    <header className="app-header">
      <h3>Banking 01050-1</h3>
      <Menu/>
    </header>
  )
}
