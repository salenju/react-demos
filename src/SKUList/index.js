import React from 'react'
import { observer } from 'mobx-react'

import Store from './Store'
import SkuList from './SkuList'

const SKUList = observer(() => {
  Store.actions.init()
  return (
    <div>
      <SkuList />
    </div>
  )
})

export default SKUList
