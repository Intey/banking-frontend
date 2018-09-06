import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './Menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: false
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
			document.addEventListener('mousedown', this.handleClickOutside);
		}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}
	setWrapperRef(node) {
		this.wrapperRef = node
	}
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ shown: false })
    }
  }

  openClose = () => {
    this.setState({ shown: !this.state.shown })
  }

  render() {
    // tabIndex + onBlur
    return (
      <div ref={this.setWrapperRef} className={"menu " + (this.state.shown? "shown": "") }>
        <span className="menu-button" onClick={this.openClose}
          tabIndex={0}
        >Menu</span>
        <ul className="menu-list">
          <li className="item"><NavLink to="/profile">Profile</NavLink></li>
          <li className="item"><NavLink to="/events">Events</NavLink></li>
          <li className="item"><NavLink to="/users">Users</NavLink></li>
          <li className="item"><NavLink to="/groups">Groups</NavLink></li>
          <li>-----------</li>
          <li className="item" onClick={this.props.onEventDateSort}>Sort by date</li>
          <li className="item" onClick={this.props.onEventNameSort}>Sort by Name</li>
          <li className="item" onClick={this.props.onEventFilterMy}>Only my</li>
          <li className="item" onClick={this.props.onEventFilterReset}>ResetFilter</li>
        </ul>
      </div>
    )
  }
}

Menu.propTypes = {
  onEventDateSort: PropTypes.func.isRequired,
  onEventNameSort: PropTypes.func.isRequired,
  onEventFilterMy: PropTypes.func.isRequired,
  onEventFilterReset: PropTypes.func.isRequired,
}

export default Menu
