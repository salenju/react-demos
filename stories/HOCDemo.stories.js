import React from 'react'
import { storiesOf } from '@storybook/react'

import HOCDemos from '../src/HOC'

const { HOCDemo01, HOCDemo02, HOCDemo03, HOCDemo04 } = HOCDemos

storiesOf('HOC Demo', module)
  .add('HOCDemo01', () => <HOCDemo01 />)
  .add('HOCDemo02', () => <HOCDemo02 />)
  .add('反向继承HOC', () => <HOCDemo03 />)
  .add('HOCDemo04', () => <HOCDemo04 />)
