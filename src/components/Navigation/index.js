import React, { Component } from 'react'

import NavItem from './NavItem'
import { nav } from '../../config'

import './styles.css'

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navItems: nav
    }
  }

  updateSelected = (index) =>
    this.setState(prevState => {
      return { navItems: prevState.navItems.splice(index).concat(prevState.navItems) }
    })

  render () {
    const { navItems } = this.state

    return <div className="nav-container">
      { navItems.map((item, i) =>
        <NavItem index={i} key={item.name}
          onClick={() => this.updateSelected(i)} {...item} />) }
    </div>
  }
}

export default Navigation
