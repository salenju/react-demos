import React, { Fragment } from 'react'

const Child = (props) => {
  // console.log('======+>使用React.memo后：', props.name)
  console.log('======+>', props.name)
  return (
    <Fragment>
      <h1>名字：{props.name}</h1>
      <button onClick={props.onClick}>改名字</button>
    </Fragment>
  )
}

export default React.memo(Child)
