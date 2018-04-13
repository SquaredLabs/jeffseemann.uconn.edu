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
      // TODO: change this so that if publications haven't been made in the past 3 years data
      // still populates on landing
      untilYearToDisplay: (new Date()).getFullYear() - defaultYearsToDisplay
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
      untilYearToDisplay: this.state.untilYearToDisplay - defaultYearsToDisplay,
      yearsNav: this.state.yearsNav.slice(defaultYearsToDisplay)
    })
  }

  showUntilPublication (year) {
    this.setState({
      untilYearToDisplay: year - 1,
      yearsNav: this.state.yearsNav.filter(y => y < year)
    })
  }

  async getPublications () {
    const response = await apiFetch(apiUri.publications.pathname)
    const years = _.uniq(response.data.map(publication => publication.year)).sort((a, b) => b - a)
    const yearsNav = years.slice(defaultYearsToDisplay)
    this.setState({
      publications: response.data,
      years: years,
      yearsNav: yearsNav
    })
  }

  render () {
    // Display subset of publications grouped by year
    const PublicationTiles = this.state.years
      .filter(year => year > this.state.untilYearToDisplay)
      .map((year, i) => {
        const relevantPublications = this.state.publications.filter(course => course.year === year)
        return <PublicationTile year={year} ref={year} publications={relevantPublications} key={i} />
      })

    return <div className="publications-container">
      <div className="publications-container-extra">
        <Header />
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
