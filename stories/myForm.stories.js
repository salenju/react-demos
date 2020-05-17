import React from 'react'
import { storiesOf } from '@storybook/react'

import FormClass from '../src/MyForm/FormClass'
import FormFunction from '../src/MyForm/FormFunction'

storiesOf('myForm', module)
.add('FormClass', () => <FormClass />)
.add('FormFunction', () => <FormFunction />)
