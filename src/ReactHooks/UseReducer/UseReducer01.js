import React, { useReducer } from 'react'

/**
 * Q1：什么是reducer？
 * A1:reducer是一个函数，接受两个参数（状态，控制业务逻辑的判断参数）
 *
 * Q2: 如何使用useReducer()
 * A2: const [ state, dispatch ] = useReducer(reducer, initialArg, init )
 *  - reduder: 与dispatch配套的方法
 *  - initialArg: 初始state
 *  - init: 
 * 更多内容：https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/hooks-reference.html#usereducer
 */

const UseReducer01 = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
        break
      case 'sub':
        return state - 1
        break
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h2>当前分数为：{count}</h2>
      <button onClick={() => dispatch('add')}>Increment</button>
      <button onClick={() => dispatch('sub')}>Decrement</button>
    </div>
  )
}

export default UseReducer01
