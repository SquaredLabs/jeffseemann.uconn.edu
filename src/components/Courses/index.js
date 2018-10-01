import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { apiFetch } from '../../utils'
import { apiUri, colors } from '../../config'
import _ from 'lodash'

import Header from '../Header'
import CourseTile from './CourseTile'
import Menu from '../Navigation/Menu'
import YearsBreadCrumbs from '../YearsBreadCrumbs'

import './styles.css'

const black = { color: colors.siteBlack }

const defaultYearsToDisplay = 8

class Courses extends Component {
    state = {
      courses: [],
      years: [],
      yearsNav: [],
      // Keep track of these two states so that nonconsecutive years load perfectly
      // while breadcrumbs navigation bar allows quick filtering by year
      untilYearToDisplay: 0,
      atLeastNumToDisplay: defaultYearsToDisplay
    }

    componentDidMount () {
      this.getCourses()
    }

    scrollToTop () { scroll.scrollToTop() }

    showMoreCourses () {
      this.setState({
        atLeastNumToDisplay: this.state.atLeastNumToDisplay + defaultYearsToDisplay,
        untilYearToDisplay: this.state.untilYearToDisplay - defaultYearsToDisplay,
        yearsNav: this.state.yearsNav.slice(defaultYearsToDisplay)
      })
    }

    showUntilCourse (year) {
      const newYearsNav = this.state.yearsNav.filter(y => y < year)
      this.setState({
        untilYearToDisplay: year - 1, // offset to filter
        yearsNav: newYearsNav,
        atLeastNumToDisplay: this.state.years.length - newYearsNav.length
      })
    }

    async getCourses () {
      const response = await apiFetch(apiUri.courses.pathname)
      const years = _.uniq(response.data.map(course => course.year)).sort((a, b) => b - a)
      this.setState({
        courses: response.data,
        years: years,
        yearsNav: years.slice(defaultYearsToDisplay),
        untilYearToDisplay: _.max(years) - defaultYearsToDisplay
      })
    }

    render () {
    // Display subset of courses grouped by year
      const CourseTiles = this.state.years.slice(0, this.state.atLeastNumToDisplay)
        .map((year, i) => {
          const relevantCourses = this.state.courses.filter(course => course.year === year)
          return <CourseTile year={year} ref={year} courses={relevantCourses} key={i} />
        })

      return <div className="courses-container">
        <div className="courses-container-extra">
          <Header page="Courses"/>
        </div>
        {/* TODO: fix sticky scrolling */}
        <div className="courses-nextprev-container">
          <div className="courses-next">
            <div className="courses-next-arrow">&uarr;</div>
            <div className="courses-rotate" style={black}>Next</div>
          </div>
          <div className="courses-prev">
            <div className="courses-rotate" style={black}>Previous</div>
            <div>&darr;</div>
          </div>
        </div>
        <div className="courses-wrapper">{CourseTiles}</div>
        <div className="courses-totop-container">
          <div className="courses-totop">
            <div>&uarr;</div>
            <div style={black} onClick={this.scrollToTop}>To top</div>
          </div>
        </div>
        <Menu />
        <YearsBreadCrumbs
          yearClickAction={() => this.showMoreCourses()}
          yearsNav={this.state.yearsNav}
          showUntil={() => this.showUntilCourse()} />
      </div>
    }
}

export default Courses
