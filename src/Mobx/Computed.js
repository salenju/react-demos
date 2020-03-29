import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import MobxStore from './MobxStore'
import { action } from 'mobx'

const Computed = observer(props => {
  const { actions } = MobxStore
  const { cart } = MobxStore.store

  return (
    <div>
      <Wrapper>
        <span>Product Name</span>
        <span>Count</span>
        <span>Price</span>
        <span>Sub Total</span>
      </Wrapper>
      {cart.details.map(item => (
        <Wrapper key={item.id}>
          <span>{item.name}</span>
          <span>{item.count}</span>
          <span>{item.price}</span>
          <span>{item.subTotal}</span>
        </Wrapper>
      ))}

      <Button onClick={() => actions.changeCount()}>Change</Button>
    </div>
  )
})

const Wrapper = styled('div')`
  display: flex;
  > span {
    display: inline-block;
    width: 200px;
    height: 50px;
    text-align: center;
  }
`

const Button = styled('button')`
  outline: none;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  background: #0081cc;
`
export default Computed
