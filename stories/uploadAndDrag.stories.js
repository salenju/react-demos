import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src'

const {
  UploadAndDrag01,
  UploadAndDrag02,
  UploadAndDrag03
} = Example

storiesOf('UploadAndDrag', module)
  .add('UploadAndDrag01', () => <UploadAndDrag01 />)
  .add('UploadAndDrag02', () => <UploadAndDrag02 />)
  .add('UploadAndDrag03', () => <UploadAndDrag03 />)
