import React from 'react'
import { Provider } from 'react-redux'

import Vote from './components/Vote'
import store from './store'

export default class ReduxDemo03 extends React.Component {
  /**
   * react-redux：
   *    1.Provider根组件
   *      当前整个项目都在Provider根组件下面，可以使得store可以供内部任何组件使用（基于上下文），避免了store层层传递
   *      => Provider中只允许出现一个子元素
   *      => 将创建的store基于属性传递给Provider
   *
   *    2.connect高阶组件
   */
  render() {
    return (
      <Provider store={store}>
        <div>
          <Vote title={('Salen', 'Helen')} />
        </div>
      </Provider>
    )
  }
}
