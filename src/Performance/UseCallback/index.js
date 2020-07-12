// index.js
import React, { useState, useCallback } from 'react'
import Child from './Child'

const UseCallback = () => {
  const [title, setTitle] = useState('洛')
  const [name, setName] = useState('天依')

  // 利用callback 来记忆 callback并将记忆的 callback传递给 Child
  const memoizedCallback = useCallback(() => {
    setName('未来')
  }, [])

  return (
    <div className="App">
      <h1>姓氏：{title}</h1>
      <Child name={name} onClick={memoizedCallback} />
      <button onClick={() => setTitle('初音')}>改姓氏</button>
    </div>
  )
}

export default UseCallback
