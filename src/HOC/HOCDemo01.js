import React, { Component } from 'react'
import styled from 'styled-components'

const CardStyleHOC = (className) => (WrapperComponent) => {
  return (props) => {
    return (
      <WrapperCard>
        <div className={className || 'primary'}>
          <WrapperComponent {...props} />
        </div>
      </WrapperCard>
    )
  }
}

const NormalCard = () => {
  return <div>我是一个普通的Card</div>
}

const HOCDemo01 = () => {
  return <div>{CardStyleHOC('primary')(<NormalCard />)} AAA</div>
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

export default HOCDemo01
