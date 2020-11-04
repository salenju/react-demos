import React from 'react'

import { Consumer } from './index' //引入父组件的Consumer容器

const Grandson = (props) => {
  return (
    //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
    <Consumer>
      {(value) => (
        <div
          style={{
            border: '1px solid green',
            width: '60%',
            margin: '50px auto',
            textAlign: 'center',
          }}
        >
          <p>孙组件。获取传递下来的值:{value.name}</p>
        </div>
      )}
    </Consumer>
  )
}
export default Grandson
