import React from 'react'

import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'

export default class Vote extends React.Component {
  static defaultProps = {
    title: 'Salen',
  }
  constructor(props) {
    super(props)
  }

  render() {
    let { store } = this.props
    return (
      <section>
        <h3>{this.props.title}</h3>
        <VoteBody store={store} />
        <VoteFooter store={store} />
      </section>
    )
  }
}
