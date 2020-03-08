import React, { useState } from 'react';
import styled from 'styled-components';

const StateHook02 = ({ initCount }) => {
  const [count, setCount] = useState(initCount);

  const handleReset = () => {
    setCount(initCount)
  }

  const addCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const reduceCount = () => {
    setCount(prevCount => prevCount === 0 ? 0 : prevCount - 1)
  }

  return (
    <HookContainer>
      <h1> Count:{count}</h1>
      <div className='action'>
        <button onClick={handleReset}>Reset</button>
        <button onClick={addCount}>+</button>
        <button onClick={reduceCount}>-</button>
      </div>
    </HookContainer>
  )
}

const HookContainer = styled('div')`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  width: 200px;
  height:200px;
  background:#fafafa;
  border:2px solid #f40;
  border-radius:6px;
  .action {
    display:flex;
    justify-content:center;
    >button {
      margin:0 8px 0 0;
    }
  }
`

export default StateHook02