import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

class NavItem extends Component {
  render () {
    const { text, link, index } = this.props

    return <div className="nav-item" index={index}>
      <NavLink to={link}>
        {text}
      </NavLink>
    </div>
  }
}

export default NavItem
