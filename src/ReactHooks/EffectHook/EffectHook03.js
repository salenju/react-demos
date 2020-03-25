import React, { useState, useEffect } from 'react'

const EffectHook03 = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  /**
   * 1.当useEffect只有一个参数时：每次状态改变，useEffect都会解绑
   * 2.当useEffect传入第二个参数：
   *  - []——组件将被销毁时才会注销
   *  - [变量1，变量2，...]——传入数组中的变量发生改变时就会注销
   */

  useEffect(() => {
    console.log('====>1')
    return () => {
      console.log('=====>2')
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
