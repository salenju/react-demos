import React from 'react'

import Vote from './components/Vote'
import store from './store'

export default class ReduxDemo03 extends React.Component {
  render() {
    return (
      <div>
        <Vote title={('Salen', 'Helen')} store={store} />
      </div>
    )
  }
}
