import React from 'react'

import VoteBody from './VoteBody'

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
        <VoteBody />
      </section>
    )
  }
}
