import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { apiFetch } from '../../utils'
import { apiUri, colors } from '../../config'
import _ from 'lodash'

import Header from '../Header'
import CourseTile from './CourseTile'
import YearsNaviation from '../YearsNavigation'

import './styles.css'

const black = { color: colors.siteBlack }

const defaultYearsToDisplay = 8

class Courses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      courses: [],
      years: [],
      yearsNav: [],
      // TODO: change this so that if publications haven't been made in the past 3 years data
      // still populates on landing
      untilYearToDisplay: (new Date()).getFullYear() - defaultYearsToDisplay
    }
    this.showMoreCourses = this.showMoreCourses.bind(this)
    this.showUntilCourse = this.showUntilCourse.bind(this)
  }

  componentDidMount () {
    this.getCourses()
  }

  scrollToTop () { scroll.scrollToTop() }

  showMoreCourses () {
    this.setState({ untilYearToDisplay: this.state.untilYearToDisplay - defaultYearsToDisplay })
    this.setState({ yearsNav: this.state.yearsNav.slice(defaultYearsToDisplay) })
  }

  showUntilCourse (year) {
    this.setState({ untilYearToDisplay: year - 1 })
    this.setState({ yearsNav: this.state.yearsNav.filter(y => y < year) })
    // scrollToComponent(this.refs[year])
  }

  async getCourses () {
    const response = await apiFetch(apiUri.courses.pathname)
    this.setState({ courses: response.data })
    this.setState({
      years: _.uniq(response.data.map(course => course.year)).sort((a, b) => b - a)
    })
    this.setState({ yearsNav: this.state.years.slice(defaultYearsToDisplay) })
  }

  render () {
    // Display subset of courses grouped by year
    const CourseTiles = this.state.years
      .filter(year => year > this.state.untilYearToDisplay)
      .map((year, i) => {
        const relevantCourses = this.state.courses.filter(course => course.year === year)
        return <CourseTile year={year} ref={year} courses={relevantCourses} key={i} />
      })

    return <div className="courses-container">
      <div className="courses-container-extra">
        <Header />
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
      <YearsNaviation
        yearClickAction={this.showMoreCourses}
        yearsNav={this.state.yearsNav}
        showUntil={this.showUntilCourse} />
    </div>
  }
}

export default Courses
