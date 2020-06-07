import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import action from '../store/action'

const Wrapper = styled('div')`
  .uncomplete-task {
    color: #f40;
  }
  input {
    width: 200px;
    height: 30px;
  }
`

class Head extends React.Component {
  constructor(props) {
    super(props)
  }
  keyUp = (e) => {
    if (e.keyCode === 13) {
      let value = e.target.value.trim()
      if (value.length === 0) {
        return
      }
      this.props.add({
        name: value,
        state: 0,
      })
      e.target.value = ''
    }
  }

  render() {
    let { data } = this.props
    let len = data.filter((item) => item['state'] === 0).length
    return (
      <Wrapper>
        <h3>
          任务列表[当前未完成任务<span className="uncomplete-task">{len}</span>]
        </h3>
        <input onKeyUp={this.keyUp} />
      </Wrapper>
    )
  }
}

export default connect((state) => ({ ...state.todo }), action.todo)(Head)
