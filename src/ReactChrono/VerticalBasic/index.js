import React from 'react'
import { Chrono } from 'react-chrono'

import testData from '../test'

export default function VerticalBasic() {
  return (
    <div className="vertical-basic">
      <div style={{ width: '100%', height: '95vh' }}>
        <Chrono
          items={testData.default}
          mode="VERTICAL"
          slideShow
          // hideControls
          // disableNavOnKey
          slideItemDuration={4000}
        />
      </div>
    </div>
  )
}
