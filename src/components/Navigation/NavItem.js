import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from '../../config'

import './styles.css'

const styles = {
  color: colors.siteGray
}

class NavItem extends Component {
  render () {
    const { text, link, index } = this.props
    const navItemColor = index === 0 ? 'first' : 'rest'
    const addLastName = (text === 'Lab' && index === 0) ? 'Seemann ' : ''

    return <div className='nav-item'>
      <NavLink className={navItemColor} to={link}>
        <span style={styles}>{addLastName}</span>
        {text}
      </NavLink>
    </div>
  }
}

export default NavItem
