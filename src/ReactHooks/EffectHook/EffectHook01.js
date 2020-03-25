import React, { useState, useEffect } from 'react'

const EffectHook01 = () => {
  const [count, setCount] = useState(0)

  /**
   * Q1: useEffect做了什么？
   * A1:告诉React组件在渲染后需要执行某些操作
   * 
   * Q2: 为什么在组件内部调用useEffect？
   * A2: 为了方便直接访问state（如count）或props
   * 
   * Q3: useEffect会在每次渲染后执行吗？
   * A3: 默认情况下会在第一次渲染之后和每次更新之后都执行
   */
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('=====>')
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default EffectHook01