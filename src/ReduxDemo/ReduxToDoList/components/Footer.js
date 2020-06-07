import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import action from '../store/action'

const Wrapper = styled('div')`
  padding: 20px 0 0;
  button {
    margin: 0 10px;
    cursor: pointer;
  }
  button.active {
    background: #0081cc;
    color: #fff;
  }
`

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.showData = [
      { text: '全部', flag: 'all' },
      { text: '已完成', flag: 'complete' },
      { text: '未完成', flag: 'uncomplete' },
    ]
  }

  updateFilter(text) {
    if (this.props.flag === 'text') {
      return
    }
    this.props.filter(text)
  }

  render() {
    return (
      <Wrapper>
        {this.showData.map((item) => {
          let { text, flag: itemFlag } = item
          return (
            <button
              key={itemFlag}
              onClick={() => this.updateFilter(itemFlag)}
              className={this.props.flag === itemFlag ? 'active' : ''}
            >
              {text}
            </button>
          )
        })}
      </Wrapper>
    )
  }
}

export default connect((state) => ({ ...state.todo }), action.todo)(Footer)
