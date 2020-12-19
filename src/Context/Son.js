import React from 'react'

import { Consumer } from './index'
import Grandson from './Grandson'

const Son = (props) => {
  return (
    //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
    <Consumer>
      {(value) => {
        return <div
          style={{
            border: '1px solid blue',
            width: '60%',
            margin: '20px auto',
            textAlign: 'center',
          }}
        >
          <p>子组件。获取父组件的值:{value.name}</p>
          {/* 孙组件内容 */}
          <Grandson />
        </div>
      }}
    </Consumer>
  )
}

export default Son
