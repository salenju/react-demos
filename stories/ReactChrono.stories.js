import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src'

const { ReactChrono } = Example
storiesOf('react-chrono timeline插件', module)
  .add('HorizontalBasic', () => <ReactChrono.HorizontalBasic />)
  .add('VerticalBasic', () => <ReactChrono.VerticalBasic />)
  .add('VerticalAlternating', () => <ReactChrono.VerticalAlternating />)
  .add('VerticalAlternatingImg', () => <ReactChrono.VerticalAlternatingImg />)
  .add('VerticalWithMixedContent', () => <ReactChrono.VerticalWithMixedContent />)
