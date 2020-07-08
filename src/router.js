import React from 'react'
import {BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Page01 from './ReactRouter/Page01'
import Page02 from './ReactRouter/Page02'
import Page03 from './ReactRouter/Page03'
import PageNotFound from './ReactRouter/PageNotFound'

// HOC
import HOCDemos from './HOC'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Page01} />
                <Route path='/page2' exact component={Page02} />
                <Route path='/page3' exact component={Page03} />

                {/* 重定向 */}
                <Redirect from='/page88' to='/page3' />
                <Route path='/page88' exact component={Page03} />

                {/* HOC */}
                <Route path='/hocdemo' exact component={HOCDemos.HOCDemo01} />

                // 地址都找不到时的处理 404
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App