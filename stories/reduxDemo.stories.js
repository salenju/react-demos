import React from 'react'
import { storiesOf } from '@storybook/react'

import ReduxDemo01 from '../src'
import ReduxDemo02 from '../src'

storiesOf('Redux Demo', module)
  .add('ReduxDemo01', () => <ReduxDemo01 />)
  .add('ReduxDemo02', () => <ReduxDemo02 />)
