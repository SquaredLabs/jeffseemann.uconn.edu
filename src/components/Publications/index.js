import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import scrollToComponent from 'react-scroll-to-component';

import { apiFetch } from '../../utils'
import { apiUri, colors } from '../../config'
import _ from 'lodash'

import Header from '../Header'
import PublicationTile from './PublicationTile'
import Menu from '../Navigation/Menu'
import WordWheel from './WordWheel'
import YearsBreadCrumbs from '../YearsBreadCrumbs'

import './styles.css'

const black = { color: colors.siteBlack }

const defaultYearsToDisplay = 2

class Publications extends Component {

    scrollPoints = {}
    state = {
      publications: [],
      years: [],
      yearsNav: [],
      yearRefs: [],
      currentScolledYear: 0,
      // Keep track of these two states so that nonconsecutive years load perfectly
      // while breadcrumbs navigation bar allows quick filtering by year
      untilYearToDisplay: 0,
      atLeastNumToDisplay: defaultYearsToDisplay
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

  skipUntilPublication = (year) => {
    this.showUntilPublication(year)
    this.setState({ currentScolledYear: year })
    // Timeout is necessary for animations to complete and refs to be generated.
    setTimeout(() => { scrollToComponent(this.scrollPoints[year + 'TOP']) }, 300)
  }

  async getPublications () {
    const response = await apiFetch(apiUri.publications.pathname)
    const years = _.uniq(response.data.map(publication => publication.year)).sort((a, b) => b - a)
    const yearsNav = years.slice(defaultYearsToDisplay)
    this.setState({
      publications: response.data,
      years: years,
      yearsNav: yearsNav,
      currentScolledYear: this.state.currentScolledYear === 0 ? _.max(years) : this.state.currentScolledYear,
      untilYearToDisplay: _.max(years) - defaultYearsToDisplay
    })
  }

  newerPublication = () => {
    const currentYearIndex = this.state.years.indexOf(this.state.currentScolledYear)
    if (currentYearIndex === -1) return
    const nextYear = this.state.years[currentYearIndex - 1]
    this.setState({ currentScolledYear: nextYear })
    scrollToComponent(this.scrollPoints[nextYear + 'TOP'])
  }

  olderPublication = () => {
    this.showMorePublications()
    const currentYearIndex = this.state.years.indexOf(this.state.currentScolledYear)
    if (currentYearIndex === -1) return
    const nextYear = this.state.years[currentYearIndex + 1]
    this.setState({currentScolledYear: nextYear})
    scrollToComponent(this.scrollPoints[nextYear + 'TOP'])
  }

  render = () => {
    // Display subset of publications grouped by year
    this.scrollPoints = {}
    const PublicationTiles = this.state.years.slice(0, this.state.atLeastNumToDisplay)
      .map((year, i) => {
        const relevantPublications = this.state.publications.filter(course => course.year === year)
        let ref = year + 'Secondary'
        if (!this.scrollPoints[year + 'TOP']) {
          ref = year + 'TOP'
        }
        return <PublicationTile year={year} ref={(section) => {
          this.scrollPoints[ref] = section
          return year
        }} publications={relevantPublications} key={i} />
      })
    return <div className="publications-container">
      <div className="publications-container-extra">
        <Header page="Publications"/>
      </div>
      <div className="publications-nextprev-container">
        <div className="publications-next" onClick={() => this.newerPublication()}>
          <div className="publications-next-arrow">&uarr;</div>
          <div className="publications-rotate" style={black}>Newer</div>
        </div>
        <div className="publications-prev" onClick={() => this.olderPublication()}>
          <div className="publications-rotate" style={black}>Older</div>
          <div>&darr;</div>
        </div>
      </div>
      <div className="publications-inner-container">
        <div>{PublicationTiles}</div>
        <div className="publications-word-wheel">
          <WordWheel data={this.state.publications} years={this.state.years}/>
        </div>
        <YearsBreadCrumbs
          yearClickAction={this.skipUntilPublication.bind(this)}
          yearsNav={this.state.yearsNav}
          loadMoreAction={this.showMorePublications.bind(this)}
          context={this} />
      </div>
      <div className="publications-totop-container">
        <div className="publications-totop">
          <div>&uarr;</div>
          <div style={black} onClick={this.scrollToTop}>To top</div>
        </div>
      </div>
      <Menu />
    </div>
  }
}

export default Publications
