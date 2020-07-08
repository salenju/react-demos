import React, { Component } from 'react'
import styled from 'styled-components'

// 反向继承 HOC
const WithLoading = (WrapperComponent) => {
  return class extends WrapperComponent {
    render() {
      return <div className="loading">{super.render()}</div>
    }
  }
}

// @WithLoading
class HOCDemo03 extends Component {
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

export default HOCDemo03
