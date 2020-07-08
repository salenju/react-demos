import React, { useState, useEffect } from 'react'
import { message } from 'antd'

const EffectHook03 = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  /**
   * 语法：useEffect(副作用需要执行的回调函数，副作用监听的状态数组)
   * 1.当useEffect只有一个参数时：每次State改变，都会执行副作用
   * 2.当useEffect传入第二个参数：
   *  - []——组件将被卸载时才会执行清除函数
   *  - [state1，state2，...]——传入数组中的State发生改变时就会执行副作用
   */

  useEffect(() => {
    message.info('state变化我就打印', 1.5)
    // 清除函数
    return () => {
      message.info('state变化我就打印-清除函数', 1.5)
    }
  })

  useEffect(() => {
    message.info('我只在页面挂载时打印', 1.5)
    // 清除函数
    return () => {
      message.info('我只在页面卸载时打印-清除函数', 1.5)
    }
  }, [])

  useEffect(() => {
    message.info('count变化我就打印', 1.5)
    // 清除函数
    return () => {
      message.info('count变化我就打印-清除函数', 1.5)
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default EffectHook03
