import React from 'react'
import { Chrono } from 'react-chrono'

import testData from '../test'

export default function VerticalWithMixedContent() {
  return (
    <div className="vertical-mix-content">
      <div style={{ width: '750px', height: '95vh' }}>
        <Chrono items={testData.img} mode="VERTICAL" cardHeight={250} />
      </div>
    </div>
  )
}
