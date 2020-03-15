import React from 'react' 
import { storiesOf } from '@storybook/react'

import ReactHooks from '../src/ReactHooks'

const {
  StateHook01,
  StateHook02,
  EffectHook01,
  EffectHook02,
  EffectHook03,
  EffectHook04
} = ReactHooks

storiesOf('React-Hooks/useState', module)
  .add('StateHook01', () => <StateHook01 />)
  .add('StateHook02', () => <StateHook02 initCount={1} />) 

storiesOf('React-Hooks/useEffect', module)
  .add('无需清除的effect', () => <EffectHook01 />)
  .add('需要清除的effect', () => <EffectHook02 />)
  .add('EffectHook03', () => <EffectHook03 />)
  .add('EffectHook04', () => <EffectHook04 />) 
