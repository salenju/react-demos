import React, { useContext, useState, createContext } from 'react'
const CountContext = createContext()

const Counter = () => {
  const count = useContext(CountContext)
  return <h2>{count}</h2>
}

const UseContext01 = () => {
  /**
   * Q1:useContext解决了什么问题？
   * A1:useContext解决的是在使用函数形式来声明组件时，父子组件之间参数传递的问题。Contxt对它所包含的数据树提供全局数据共享的技术。
   *
   */

  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default UseContext01
