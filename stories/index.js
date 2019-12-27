import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src'

const {
  StateHook01, StateHook02,
  EffectHook01, EffectHook02, EffectHook03, EffectHook04,
  RowCrollDemo, RowCrollDemo01, RowCrollDemo02, RowCrollDemo03,
  CheckBoxDemo01,
  CallbackRef01, CallbackRef02,
  CustomTextInput,
  AutoFocusTextInput,
  Context01,
  Link01,
  FormInput01,
  Computed,
} = Example

storiesOf('React-Hooks/useState', module)
  .add('StateHook01', () => <StateHook01 />)
  .add('StateHook02', () => <StateHook02 initCount={1} />)

storiesOf('React-Hooks/useEffect', module)
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
  .add('CallbackRef01', () => <CallbackRef01 />)
  .add('CallbackRef02', () => <CallbackRef02 />)
  .add('CustomTextInput', () => <CustomTextInput />)
  .add('AutoFocusTextInput', () => <AutoFocusTextInput />)

storiesOf('Context', module)
  .add('Context01', () => <Context01 />)

storiesOf('ReactRouter', module)
  .add('Link01', () => <Link01 />)

storiesOf('Mobx Demo', module)
  .add('Computed', () => <Computed />)
