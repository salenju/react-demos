import React from 'react'
import { connect } from 'react-redux'

import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'

class Vote extends React.Component {
  static defaultProps = {
    title: 'Salen',
  }
  constructor(props) {
    super(props)
  }

  render() {
    let { title } = this.props
    return (
      <section>
        <h3>{title}</h3>
        <VoteBody />
        <VoteFooter />
      </section>
    )
  }
}

/**
 * 导出的不再是我们创建的组件，而是基于connent构造后的高阶组件
 *
 * export default connect([mapStateToProps],[mapDispatchToProps])([自己创建的组件])
 */
export default connect((state) => ({ ...state.vote }), null)(Vote)
