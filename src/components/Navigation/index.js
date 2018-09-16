import React, { Component } from 'react'
import { withRouter } from 'react-router'

import NavItem from './NavItem'
import { nav } from '../../config'
import _ from 'lodash'

import './styles.css'

class Navigation extends Component {
  // find the index in the nav array of the current page from react-router

  i = _.findIndex(nav, o => o.link === this.props.location.pathname)
  state = {
    // simulate a circular array through slicing of current page index
    navItems: nav.slice(this.i).concat(nav.slice(0, this.i))
  }


  render() {
    return (
      <div className="nav-container">
        {this.state.navItems.map((item, i) => <NavItem index={i} key={item.name} {...item} />)}
      </div>
    )
  }
}

export default withRouter(Navigation)
