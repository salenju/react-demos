import React from 'react'

export default class VoteBody extends React.Component {
  static defaultProps = {
    title: 'Salen',
  }
  constructor(props) {
    super(props)
    let {
        store: { getState },
      } = this.props,
      { n, m } = getState()
    this.state = { n, m }
  }

  componentDidMount() {
    let {
      store: { getState, subscribe },
    } = this.props
    subscribe(() => {
      let { n, m } = getState()
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
