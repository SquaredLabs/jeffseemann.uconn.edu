import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

class NavItem extends Component {
  render () {
    const { text, link, index } = this.props
    const navItemColor = index === 0 ? 'first' : 'rest'

    return <div className='nav-item' onClick={this.props.onClick}>
      <NavLink className={navItemColor} to={link}>
        {text}
      </NavLink>
    </div>
  }
}

export default NavItem
