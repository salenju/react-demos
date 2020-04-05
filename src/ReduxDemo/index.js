import React from 'react'
import { Provider } from 'react-redux'

import PostForm from './PostForm'
import store from './store'

const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <PostForm />
    </Provider>
  )
}

export default ReduxDemo
