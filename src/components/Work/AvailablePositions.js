import React, { Component } from 'react'
import { apiFetch } from '../../utils'
import { apiUri } from '../../config'

import Position from './Position'

import './styles.css'

class AvailablePositions extends Component {
    state = {
      positions: []
    }

    componentDidMount () {
      this.getPositions()
    }

    async getPositions () {
      const response = await apiFetch(apiUri.positions.pathname, apiUri.positions.query)
      this.setState({ positions: response.data })
    }

    render () {
      const positions = this.state.positions.map((position, i) =>
        <Position key={i} position={position} />
      )

      return <div className="availabe-positions-container">{positions}</div>
    }
}

export default AvailablePositions
