import React from 'react'
import { connect } from 'react-redux'

class VoteBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { n, m } = this.props
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

const mapStateToProps = (state) => {
  return {
    ...state.vote,
  }
}

export default connect(mapStateToProps, null)(VoteBody)
