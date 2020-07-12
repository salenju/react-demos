// index.js
import React, { useState, useMemo } from 'react'

const UseMemo = () => {
  const [num, setNum] = useState(0)

  // 耗时计算函数
  const expensiveFn = () => {
    let result = 0
    for (let i = 0; i < 10000; i++) {
      result += i
    }
    console.log('======-->', result)
    return result
  }

  // const base = expensiveFn()
  const base = useMemo(expensiveFn, [])

  return (
    <div>
      <h1>count:{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  )
}

export default UseMemo
