import React, { Component } from 'react'
<<<<<<< HEAD
import { apiFetch } from '../../utils'
=======
import { apiFetch} from '../../utils'
>>>>>>> 006e7b39c25537bacc85490708234b9d2d72f7b3
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
