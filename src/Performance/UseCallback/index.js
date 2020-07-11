// index.js
import React, { useState } from 'react'
import Child from './Child'

const UseCallback = () => {
  const [title, setTitle] = useState('洛')
  const [name, setName] = useState('天依')

  return (
    <div className="App">
      <h1>姓氏：{title}</h1>
      <Child name={name} onClick={() => setName('未来')} />
      <button onClick={() => setTitle('初音')}>改姓氏</button>
    </div>
  )
}

export default UseCallback
