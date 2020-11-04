import React from 'react'
import Son from './Son'

export const { Provider, Consumer } = React.createContext('默认名称')

const Context01 = () => {
  let _value = {
    name: '小人头',
  }
  return (
    //Provider共享容器 接收一个name属
    <Provider value={_value}>
      <div
        style={{
          border: '1px solid red',
          width: '30%',
          margin: '50px auto',
          textAlign: 'center',
        }}
      >
        <p>父组件定义的值:{_value.name}</p>
        <Son />
      </div>
    </Provider>
  )
}

export default Context01
