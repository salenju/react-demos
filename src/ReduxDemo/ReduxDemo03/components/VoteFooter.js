import React from 'react'

import * as TYPE from '../store/action-types'
import action from '../store/action'

export default class VoteFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {
      store: { dispatch },
    } = this.props

    return (
      <section>
        <button onClick={() => dispatch(action.vote.support())}>支持</button>
        <button onClick={() => dispatch(action.vote.against())}>反对</button>
      </section>
    )
  }
}
