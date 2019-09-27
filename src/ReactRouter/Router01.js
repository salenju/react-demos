import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const TestComponent = {
  EffectHook: Loadable({
    loader: () => import('../EffectHook/EffectHook01')
  }),
  StateHook: Loadable({
    loader: () => import('../StateHook/StateHook01')
  })
}

const Router01 = () => {

  return (
    <HashRouter>
      <Switch>
        <Route exact path='/effect-hook' component={TestComponent.EffectHook} />
        <Route path='/state-hook' component={TestComponent.StateHook} />
      </Switch>
    </HashRouter>
  )
}

export default Router01