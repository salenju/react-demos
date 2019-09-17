import { createStore, combineReducers } from './redux'

import counterReducer from './reducers/counter'
import InfoReducer from './reducers/info'

const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer
})

const store = createStore(reducer)

console.log('==>',store.getState())

// 自增
store.dispatch({
  type:'INCREMENT'
})

// 自减
store.dispatch({
  type:'SET_NAME',
  name:'梦溪'
})