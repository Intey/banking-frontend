import React from 'react'

import './Menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: false
    }
  }

  openClose = () => {
    this.setState({ shown: !this.state.shown })
  }

  onBlur = () => {
    this.setState({ shown: false })
  }

  render() {
    // tabIndex + onBlur
    return (
      <div className={"menu " + (this.state.shown? "shown": "") }>
        <span className="menu-button" onClick={this.openClose}
          onBlur={this.onBlur}
          tabIndex={0}
        >Menu</span>
        <ul className="menu-list">
          <li className="item">Sort by date</li>
          <li className="item">Sort by Name</li>
          <li className="item">Filter by type</li>
        </ul>
      </div>
    )
  }
}

export default Menu
