import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src'

const { AMInput } = Example

storiesOf('Antd-Mobile', module).add('-AMInput', () => <AMInput />)
