import React from 'react'
import { connect } from 'react-redux'

import * as TYPE from '../store/action-types'
import action from '../store/action'

class VoteFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { support, against } = this.props

    return (
      <section>
        <button onClick={() => support()}>支持</button>
        <button onClick={() => against()}>反对</button>
      </section>
    )
  }
}

/** ================== 写法一 ================== */

// // 把redux中的状态信息遍历赋值给当前组件的属性
// const mapStateToProps = (state) => {
//   // 该组件需要什么props，就从redux的state中返回对应的state即可，这样便会把所需的state挂载到当前组件的属性上
//   return { ...state.vote }
// }

// // 把redux中dispatch派发行为进行遍历，赋值给组件属性
// const mapDispatchToProps = (dispatch) => {
//   // dispatch: store中的dispatch方法
//   return {
//     support() {
//       dispatch(action.vote.support())
//     },
//     against() {
//       dispatch(action.vote.against())
//     },
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(VoteFooter)


/** ================== 写法二 ================== */
/**
 * 为什么不用写成mapDispatchToProps的格式呢？
 * 因为react-redux会把传入的action对象自动构建成dispatch派发任务的方法，即mapDispatchToProps的格式
 * 
 * 
 */
export default connect((state) => ({ ...state.vote }), action.vote)(VoteFooter)

