import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { apiFetch } from '../../utils'
import { apiUri, colors } from '../../config'
import _ from 'lodash'

import Header from '../Header'
import PublicationTile from './PublicationTile'
import WordWheel from './WordWheel'
import YearsBreadCrumbs from '../YearsBreadCrumbs'

import './styles.css'

const black = { color: colors.siteBlack }

const defaultYearsToDisplay = 2

class Publications extends Component {
  constructor (props) {
    super(props)

    this.state = {
      publications: [],
      years: [],
      yearsNav: [],
      // Keep track of these two states so that nonconsecutive years load perfectly
      // while breadcrumbs navigation bar allows quick filtering by year
      untilYearToDisplay: 0,
      atLeastNumToDisplay: defaultYearsToDisplay
    }
    this.showMorePublications = this.showMorePublications.bind(this)
    this.showUntilPublication = this.showUntilPublication.bind(this)
  }

  componentDidMount () {
    this.getPublications()
  }

  scrollToTop () { scroll.scrollToTop() }

  showMorePublications () {
    this.setState({
      atLeastNumToDisplay: this.state.atLeastNumToDisplay + defaultYearsToDisplay,
      untilYearToDisplay: this.state.untilYearToDisplay - defaultYearsToDisplay,
      yearsNav: this.state.yearsNav.slice(defaultYearsToDisplay)
    })
  }

  showUntilPublication (year) {
    const newYearsNav = this.state.yearsNav.filter(y => y < year)
    this.setState({
      untilYearToDisplay: year - 1, // offset to filter
      yearsNav: newYearsNav,
      atLeastNumToDisplay: this.state.years.length - newYearsNav.length
    })
  }

  async getPublications () {
    const response = await apiFetch(apiUri.publications.pathname)
    const years = _.uniq(response.data.map(publication => publication.year)).sort((a, b) => b - a)
    const yearsNav = years.slice(defaultYearsToDisplay)
    this.setState({
      publications: response.data,
      years: years,
      yearsNav: yearsNav,
      untilYearToDisplay: _.max(years) - defaultYearsToDisplay
    })
  }

  render () {
    // Display subset of publications grouped by year
    const PublicationTiles = this.state.years.slice(0, this.state.atLeastNumToDisplay)
      .map((year, i) => {
        const relevantPublications = this.state.publications.filter(course => course.year === year)
        return <PublicationTile year={year} ref={year} publications={relevantPublications} key={i} />
      })

    return <div className="publications-container">
      <div className="publications-container-extra">
        <Header page="Publications"/>
      </div>
      {/* TODO: fix sticky scrolling */}
      <div className="publications-nextprev-container">
        <div className="publications-next">
          <div className="publications-next-arrow">&uarr;</div>
          <div className="publications-rotate" style={black}>Next</div>
        </div>
        <div className="publications-prev">
          <div className="publications-rotate" style={black}>Previous</div>
          <div>&darr;</div>
        </div>
      </div>
      <div className="publications-inner-container">
        <div>{PublicationTiles}</div>
        <div className="publications-word-wheel">
          <WordWheel data={this.state.publications} years={this.state.years}/>
        </div>
        <YearsBreadCrumbs
          yearClickAction={this.showMorePublications}
          yearsNav={this.state.yearsNav}
          showUntil={this.showUntilPublication} />
      </div>
      <div className="publications-totop-container">
        <div className="publications-totop">
          <div>&uarr;</div>
          <div style={black} onClick={this.scrollToTop}>To top</div>
        </div>
      </div>
    </div>
  }
}

export default Publications
