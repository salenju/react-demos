import React, { useState } from 'react'

function StateHook01() {
  // 可以声明多个state变量
  // 在调用useState时利用数组结构为state变量定义不同的名字
  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('?')

  const handleFruitClick = () => {
    setFruit('banana')
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr />
      <div>
        我最爱的水果是：{fruit}
        点击
        <button onClick={handleFruitClick}>Button</button>
        告诉你
      </div>
    </div>
  )
}

export default StateHook01