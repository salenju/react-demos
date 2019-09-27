import React, { Component } from 'react';
import { Empty } from 'antd'
import styled, { keyframes } from 'styled-components'

const rowUp = keyframes`
  0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }
  100% {
      -webkit-transform: translate3d(0, -50%, 0);
      transform: translate3d(0, -50%, 0);
  }
`

const RowCrollContainer = styled('div')`
  .rowup{
    -webkit-animation: ${props => Math.floor(props.offsetHeight * 1000 / props.speed)}ms ${rowUp} linear infinite normal;
    animation: ${props => Math.floor(props.offsetHeight * 1000 / props.speed)}ms ${rowUp} linear infinite normal;
  }
`

class RowCroll02 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rollClass: ''
    }
  }

  componentDidMount(){
      if (this.props.children.length > 5) {
       this.setState({
         rollClass:'rowup'
       })
      }
  }

  render() {
    return (
      <div>
        {
          this.props.children.length !== 0
            ? <RowCrollContainer offsetHeight={this.props.children.length * 32} {...this.props} >
              <div className="scroll" style={{ height: this.props.height, overflow: 'hidden' }}>
                <div className={this.state.rollClass}>
                  {this.props.children}
                  {
                    this.props.children.length > 5
                      ? this.props.children
                      : null
                  }
                </div>
              </div>
            </RowCrollContainer>
            : <Empty />
        }
      </div>
    )
  }
}

export default RowCroll02