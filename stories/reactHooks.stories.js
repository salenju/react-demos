import React from 'react'
import { storiesOf } from '@storybook/react'

import ReactHooks from '../src/ReactHooks'

const {
  StateHook01,
  StateHook02,
  EffectHook01,
  EffectHook02,
  EffectHook03,
  EffectHook04,
  UseContext01,
  UseReducer01,
  UseReducer02
} = ReactHooks

storiesOf('React-Hooks/useState', module)
  .add('StateHook01', () => <StateHook01 />)
  .add('StateHook02', () => <StateHook02 initCount={0} />)

storiesOf('React-Hooks/useEffect', module)
  .add('无需清除的effect', () => <EffectHook01 />)
  .add('需要清除的effect', () => <EffectHook02 />)
  .add('EffectHook03', () => <EffectHook03 />)
  .add('EffectHook04', () => <EffectHook04 />)

storiesOf('React-Hooks/useContext', module).add('UseContext01', () => (
  <UseContext01 />
))

storiesOf('React-Hooks/UseReducer', module)
  .add('UseReducer01', () => <UseReducer01 />)
  .add('UseReducer02', () => <UseReducer02 />)
