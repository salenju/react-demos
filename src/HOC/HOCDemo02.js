import React, { Component } from 'react'
import styled from 'styled-components'

const CardStyleHOC = (WrapperComponent) => {
  return (props) => {
    return (
      <div className="card">
        <WrapperComponent {...props} />
      </div>
    )
  }
}

const StyleFactory = (className) => (WrapperComponent) => {
  return (props) => {
    return (
      <div className={className}>
        <WrapperComponent {...props} />
      </div>
    )
  }
}

// @CardStyleHOC
// @StyleFactory('card')
class HOCDemo02 extends Component {
  render() {
    return <div>我是一个普通的Card</div>
  }
}

const Wrapper = styled('div')`
  font-size: 24px;
`

const WrapperCard = styled('div')`
  .primary {
    width: 200px;
    height: 200px;
    border: 1px solid #fafafa;
  }
`

export default HOCDemo02
