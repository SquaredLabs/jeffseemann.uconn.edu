import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const black = { color: colors.siteBlack }

class YearsNavigation extends Component {
  render () {
    /**
     * yearClickAction - what happens when a year in the navigation bar is clicked
     * yearsNav - years to display in navigation bar
     * showUntil - function to update the year to display until
    */
    const { yearClickAction, loadMoreAction, yearsNav } = this.props

    // Display years in navigation not already on screen
    const yearsNavFiltered = yearsNav.map((year, i) => {
      return <div className="navigation-year" key={i} onClick={() => yearClickAction(year)}>{year}</div>
    })

    // Construct navigation bar
    const bar = yearsNavFiltered.length > 0
      ? <div className="navigation-bottom-center">
        <div className="navigation-years-cover" style={black}
          onClick={loadMoreAction}>...</div>
        <div className="navigation-years-nav" style={black}>{yearsNavFiltered}</div>
      </div>
      : <div className="navigation-years-nav-empty"></div>

    return bar
  }
}

export default YearsNavigation
