import React from 'react'
import { Input } from 'antd'
import { observer } from "mobx-react";

import { store, actions } from './Store'

const AntdInput = observer(props => {
  return (
    <div>
      {
        store.data.map(item => <Input defaultValue={item.value} key={item.id} onChange={(e) => actions.onChange(item.id, e.target.value)} />)
      }
    </div>
  )
})

export default AntdInput