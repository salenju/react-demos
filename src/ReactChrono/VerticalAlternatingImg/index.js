import React from 'react'
import { Chrono } from 'react-chrono'

import testData from '../test'

export default function VerticalAlternatingImg() {
  return (
    <div className="vertical-alternating-img">
      <div style={{ width: '100%', height: '95vh' }}>
        <Chrono items={testData.img} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  )
}
