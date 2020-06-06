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
    return (
      <section>
        <h3>{this.props.title}</h3>
        <VoteBody store={this.props.store} />
        <VoteFooter store={this.props.store} />
      </section>
    )
  }
}
