import React from 'react'
import { Chrono } from 'react-chrono'

import testData from '../test'

export default function HorizontalBasic() {
  return (
    <div className="horizontal-basic">
      <div style={{ width: '100%', height: '500px' }}>
        <Chrono items={testData.default} mode="HORIZONTAL" theme={{primary:"#f40", secondary:"#fff"}} />
      </div>
    </div>
  )
}
