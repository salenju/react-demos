import React from 'react'
import { observer } from 'mobx-react'
import MobxStore from './MobxStore'

const Autorun = observer(props => {
  const { actions } = MobxStore

  return (
    <div>
      <button onClick={() => actions.asyncSetName('Helen','Zhang')}>点击修改Name</button>
    </div>
  )
})

export default Autorun