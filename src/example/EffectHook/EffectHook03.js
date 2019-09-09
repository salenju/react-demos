import React, { useState } from 'react';

const EffectHook03 = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log('====>>count:', count);
    }, 1000);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default EffectHook03