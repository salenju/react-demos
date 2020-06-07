import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Head from './components/Head'
import Footer from './components/Footer'

export default class ReduxToDoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Head />
          <Footer />
        </div>
      </Provider>
    )
  }
}
