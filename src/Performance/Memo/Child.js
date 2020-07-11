import React from 'react'

const Child = (props) => {
  console.log('======+>使用React.memo后：', props.name)
  // console.log('======+>', props.name)
  return <h1>名字：{props.name}</h1>
}

// export default Child
export default React.memo(Child)
