import React from 'react'

export default class VoteBody extends React.Component {
  constructor(props) {
    super(props)
    let { n, m } = this.props.store.getState().vote
    this.state = { n, m }
  }

  componentDidMount() {
    let {
      store: { getState, subscribe },
    } = this.props
    subscribe(() => {
      let { n, m } = getState().vote
      this.setState({
        n,
        m,
      })
    })
  }

  render() {
    let { n, m } = this.state
    let rate = (n / (n + m)) * 100
    if (isNaN(rate)) {
      rate = 0
    }
    return (
      <section>
        支持人数：<span>{n}</span>
        <br />
        反对人数：<span>{m}</span>
        <br />
        支持比率：<span>{rate.toFixed(2) + '%'}</span>
      </section>
    )
  }
}
