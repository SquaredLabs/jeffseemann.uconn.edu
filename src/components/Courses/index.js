import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import scrollToComponent from 'react-scroll-to-component'
import { apiFetch } from '../../utils'
import { apiUri, colors } from '../../config'
import _ from 'lodash'

import Header from '../Header'
import CourseTile from './CourseTile'

import './styles.css'

const black = { color: colors.siteBlack }

class Courses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      courses: [],
      years: [],
      yearsNav: [],
      untilYearToDisplay: (new Date()).getFullYear() - 8
    }
    this.showMoreCourses = this.showMoreCourses.bind(this)
  }

  componentDidMount () {
    this.getCourses()
  }

  scrollToTop () { scroll.scrollToTop() }

  showMoreCourses () {
    this.setState({ untilYearToDisplay: this.state.untilYearToDisplay - 8 })
    this.setState({ yearsNav: this.state.yearsNav.slice(8) })
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
    this.setState({ yearsNav: this.state.years.slice(8) })
  }

  render () {
    // Display subset of courses grouped by year
    const CourseTiles = this.state.years
      .filter(year => year > this.state.untilYearToDisplay)
      .map((year, i) => {
        const relevantCourses = this.state.courses.filter(course => course.year === year)
        return <CourseTile year={year} ref={year} courses={relevantCourses} key={i} />
      })
    // Display years in navigation not already on screen
    const yearsNav = this.state.yearsNav.map((year, i) => {
      // TODO: auto scroll (snap) to selected year
      return <div className="courses-year" key={i} onClick={() => this.showUntilCourse(year)}>{year}</div>
    })
    const YearsNavigation = yearsNav.length > 0
      ? <div className="courses-bottom-center courses-years-nav" style={black}>{yearsNav}</div>
      : <div className="courses-years-nav-empty"></div>
    // Display show more button if there are more courses to show
    const showMoreButton = this.state.untilYearToDisplay >= _.min(this.state.years)
      ? <div className="courses-bottom-center courses-years-cover" style={black} onClick={this.showMoreCourses}>...</div>
      : <div></div>

    return <div className="courses-container">
      <div className="courses-container-extra">
        <Header />
      </div>
      {/* TODO: fix sticky scrolling */}
      <div className="courses-nextprev-container">
        <div className="courses-next" onClick={() => scrollToComponent(this.refs)}>
          <div className="courses-next-arrow">&uarr;</div>
          <div className="courses-rotate" style={black} onClick={this.scrollToTop}>Next</div>
        </div>
        <div className="courses-prev" onClick={() => scrollToComponent(this.refs)}>
          <div className="courses-rotate" style={black} onClick={this.scrollToTop}>Previous</div>
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
      {showMoreButton}
      {YearsNavigation}
    </div>
  }
}

export default Courses
