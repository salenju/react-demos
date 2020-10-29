import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src'

const { AddToCartBtn } = Example
storiesOf('动态效果/Click', module).add('加入购物车', () => (
  <AddToCartBtn content="ADD TO CART" clickedContent="Added" />
))
