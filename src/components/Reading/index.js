import React, { Component } from 'react'
import { apiFetch } from '../../utils'
import { apiUri } from '../../config'
import Header from '../Header'
import NowReading from './NowReading'
import PastReading from './PastReading'
import Menu from '../Navigation/Menu'
import ErrorHandler from '../../hoc/ErrorHandler/errorHandler'
import './styles.css'

class Reading extends Component {
  state = {
    nowReading: [],
    pastReading: [],
    error: false
  }
  componentDidMount () {
    this.downloadData()
  }

  async downloadData () {
    try {
      const pastReading = await apiFetch(apiUri.pastReading.pathname, apiUri.pastReading.query)

      const nowReading = await apiFetch(apiUri.nowReading.pathname, apiUri.nowReading.query)
      this.setState({
        nowReading: nowReading.data,
        pastReading: pastReading.data
      })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render = () =>
    <ErrorHandler error={this.state.error}>
      <div className="reading-container">
        <Header page="Reading" />
        <NowReading books={this.state.nowReading} />
        <PastReading books={this.state.pastReading} />
        <Menu />
      </div>
    </ErrorHandler>
}

export default Reading
