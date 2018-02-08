import React, { Component } from 'react'

import NavItem from './NavItem'
import { nav } from '../../config'

import './styles.css'

class Navigation extends Component {
    render = () =>
      <div className="nav-container">
        { nav.map((item, i) => <NavItem index={i} key={item.name} {...item} />) }
      </div>
}

export default Navigation
