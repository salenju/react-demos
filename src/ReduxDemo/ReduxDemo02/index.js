import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Vote from './Vote'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
/**
 * 创建reducer
 *  reducer作用：
 *    - 1.记录所有状态修改的信息（根据行为标识走不同的修改任务）
 *    - 2.修改容器中的状态信息
 *
 * @param {Object} state  容器中原有的状态信息,如果没有状态信息则给一个初始默认值
 * @param {Object} action dispatch派发任务时传递的对象（该对象必须有一个type属性，是操作的行为标识，reducer会根据这个行为标识来识别该如何修改状态信息）
 */
let reducer = (state = { n: 0, m: 0 }, action) => {
  switch (action.type) {
    case 'VOTE_SUPPORT':
      state = { ...state, n: state.n + 1 }
      break
    case 'VOTE_AGAINST':
      state = { ...state, m: state.m + 1 }
      break
  }

  return state // 只有返回新的state原有的state才会被修改
}

/**
 * 创建store：需要把Reducer传递进来
 * store中提供三个方法：
 *  - dispatch: 派发行为（传递一个对象，对象中含有type属性）
 *  - subscribe: 事件池追加方法
 *  - getState: 获取最新管理的状态信息
 *
 */
let store = createStore(reducer)

ReactDOM.render(
  <main>
    <Vote title={('Salen', 'Helen')} store={store} />
    <VoteBody store={store} />
    <VoteFooter store={store} />
  </main>,
  root
)
