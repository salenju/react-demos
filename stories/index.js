import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src/example'

const {
  StateHook01,
  StateHook02,
  EffectHook01,
  EffectHook02,
  EffectHook03,
  EffectHook04,
  RowCrollDemo,
  RowCrollDemo01,
  RowCrollDemo02,
  RowCrollDemo03,
  CheckBoxDemo01,
} = Example

storiesOf('React-Hooks/StateHook', module)
  .add('StateHook01', () => <StateHook01 />)
  .add('StateHook02', () => <StateHook02 initCount={1} />)

storiesOf('React-Hooks/EffectHook', module)
  .add('无需清除的effect', () => <EffectHook01 />)
  .add('需要清除的effect', () => <EffectHook02 />)
  .add('EffectHook03', () => <EffectHook03 />)
  .add('EffectHook04', () => <EffectHook04 />)

storiesOf('RowCroll', module)
  .add('-RowCroll-Hook', () => <RowCrollDemo height={200} speed={25} />)
  .add('-RowCroll-Hook操作DOM', () => <RowCrollDemo01 height={200} speed={25} />)
  .add('-RowCroll-class', () => <RowCrollDemo02 height={200} speed={25} />)
  .add('-RowCroll-间歇滚动', () => <RowCrollDemo03 />)

  storiesOf('CheckBox', module)
  .add('CheckBox', () => <CheckBoxDemo01 />)

  storiesOf('Refs', module)
 
