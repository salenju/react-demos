import React from 'react'
import { Provider } from 'react-redux'

import PostForm from './components/PostForm'
import Posts from './components/Posts'
import store from './store'

const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <PostForm />
      <Posts />
    </Provider>
  )
}

export default ReduxDemo