import React from 'react'
import { Chrono } from 'react-chrono'

import testData from '../test'

export default function VerticalAlternating() {
  return (
    <div className="vertical-alternating">
      <div style={{ width: '100%', height: '95vh' }}>
        <Chrono items={testData.default} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  )
}
