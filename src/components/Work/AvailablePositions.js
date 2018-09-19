import React, { Component } from 'react'
import { apiFetch } from '../../utils'
import { apiUri } from '../../config'

import Position from './Position'

import './styles.css'

const AvailablePositions = (props) => {
  const positions = props.positions.map((position, i) =>
    <Position key={i} position={position} />
  )
  return <div className="availabe-positions-container">{positions}</div>
}


export default AvailablePositions
