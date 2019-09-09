import React, { Component } from 'react';
import { Empty } from 'antd'
import styled, { keyframes } from 'styled-components'

const rowDown1 = (count) => {
  let t = Math.floor(100 / count)  // 依据count计算没次滚动所占百分比
  let t1 = Math.ceil(t / count) // 计算执行滚动所占百分比
  let waitTime = t - t1

  let arr = [`0%{-webkit-transform: translateY(-${count * 30}px);transform: translateY(-${count * 30}px);}`]

  for (let i = 1; i <= count; i++) {
    let waitKeyFram = `${(i - 1) * t + waitTime}% {-webkit-transform: translateY(-${(count + 1 - i) * 30}px);transform: translateY(-${(count + 1 - i) * 30}px);}`
    let runKeyFram = `${t * i}% {-webkit-transform: translateY(-${(count - i) * 30}px);transform: translateY(-${(count - i) * 30}px);}`
    arr = [...arr, waitKeyFram, runKeyFram]
  }

  let str = arr.join('')
  return keyframes`${str}`
}

class RowCroll03 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollClass: '',
      count: 0,
      duration: 0
    }
  }

  componentDidMount() {
    if (this.props.children.length > 5) {
      this.setState({
        rollClass: 'row-down',
        count: this.props.children.length - 5,
        duration: this.props.children.length * this.props.time
      })
    }
  }

  render() {
    return (
      <div>
        {
          this.props.children.length !== 0
            ? <RowCrollContainer duration={this.state.duration} count={this.state.count} {...this.props} >
              <div className="scroll" style={{ height: this.props.height || 150, overflow: 'hidden' }}>
                <div className={this.state.rollClass}>
                  {this.props.children}
                </div>
              </div>
            </RowCrollContainer>
            : <Empty />
        }
      </div>
    )
  }
}


const RowCrollContainer = styled('div')`
  .scroll p {
    height:20px;
    margin:0;
    padding:5px 0;
  }
  .row-down{
    -webkit-animation: ${props => props.duration * 1000}ms ${props => rowDown1(props.count)} ease-out infinite normal;
    animation:${props => props.duration * 1000}ms ${props => rowDown1(props.count)} ease-out infinite normal;
  }
`

export default RowCroll03